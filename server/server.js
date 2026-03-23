

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pkg from "pg";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const { Pool } = pkg;

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const app = express();
const isProduction = process.env.NODE_ENV === "production";

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://techsphere-8ec2.onrender.com",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const {
      email,
      password,
      confirmPassword,
      fullname,
      phonenumber,
      location,
    } = req.body;

    if (
      !email ||
      !password ||
      !confirmPassword ||
      !fullname ||
      !phonenumber ||
      !location
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Fields cannot be empty" });
    }

    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const ukPhoneRegex = /^(?:\+44|0)7\d{9}$/;
    const locationRegex = /^[A-Za-z\s]+,\s[A-Za-z\s]+$/;

    if (!nameRegex.test(fullname)) {
      return res.status(400).json({
        success: false,
        message:
          "Full name must contain only letters and be at least 2 characters",
      });
    }

    if (!ukPhoneRegex.test(phonenumber)) {
      return res.status(400).json({
        success: false,
        message:
          "Phone number must be a valid UK mobile number, e.g. 07123456789 or +447123456789",
      });
    }

    if (!locationRegex.test(location)) {
      return res.status(400).json({
        success: false,
        message: "Location must be in the format Country, City",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const existingUser = await pool.query(
      "SELECT * FROM customers WHERE customer_email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Email already registered.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      `INSERT INTO customers 
        (customer_email, customer_password, customer_name, customer_phone, customer_location) 
        VALUES ($1, $2, $3, $4, $5)`,
      [email, hashedPassword, fullname, phonenumber, location]
    );

    return res.status(201).json({
      success: true,
      message: "Account has been registered successfully.",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Fields cannot be empty" });
    }

    const existingUser = await pool.query(
      "SELECT * FROM customers WHERE customer_email = $1",
      [email]
    );

    if (existingUser.rows.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    const user = existingUser.rows[0];
    const isMatch = await bcrypt.compare(password, user.customer_password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { customer_id: user.customer_id, email: user.customer_email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: { id: user.customer_id, email: user.customer_email },
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Server error" });
  }
});

function auth(req, res, next) {
  const token = req.cookies.auth_token;

  if (!token) {
    return res.status(401).json({ success: false, message: "Not logged in" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
}

// LOGOUT
app.post("/logout", (req, res) => {
  res.clearCookie("auth_token", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
  });

  return res.json({ success: true, message: "Logged out" });
});

// CONTACT FORM
app.post("/contact", async (req, res) => {
  try {
    const { name, EmailAddress, Inquiry } = req.body;

    if (!name || !EmailAddress || !Inquiry) {
      return res
        .status(400)
        .json({ success: false, message: "Fields cannot be empty" });
    }

    await pool.query(
      "INSERT INTO customer_text (customer_name, customer_email, customer_text) VALUES ($1, $2, $3)",
      [name, EmailAddress, Inquiry]
    );

    return res.status(201).json({
      success: true,
      message: "Message received!",
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, message: "Server error" });
  }
});

// PRODUCT SEARCH
app.get("/search", async (req, res) => {
  const { q } = req.query;

  try {
    const result = await pool.query(
      `SELECT * FROM products 
       WHERE LOWER(product_name) LIKE LOWER($1)`,
      [`%${q}%`]
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// GET PRODUCTS
app.get("/products", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM products ORDER BY product_id ASC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Get previous orders
app.get("/my-orders", auth, async (req, res) => {
  try {
    console.log("Decoded user:", req.user);

    const userId = req.user.customer_id;

    if (!userId) {
      return res.status(400).json({ message: "Customer ID missing from token" });
    }

    const result = await pool.query(
      `SELECT order_id, order_date, total_amount, status
       FROM orders
       WHERE customer_id = $1
       ORDER BY order_date DESC`,
      [userId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ message: error.message });
  }
});

app.put("/account-details", auth, async (req, res) => {
  try {
    const { name, email, location } = req.body;

    if (!name || !email || !location) {
      return res.status(400).json({
        success: false,
        message: "Name, email and location are required",
      });
    }

    const existingEmail = await pool.query(
      `SELECT customer_id 
       FROM customers 
       WHERE customer_email = $1 AND customer_id != $2`,
      [email, req.user.customer_id]
    );

    if (existingEmail.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Email already in use",
      });
    }

    const result = await pool.query(
      `UPDATE customers
       SET customer_name = $1,
           customer_email = $2,
           customer_location = $3
       WHERE customer_id = $4
       RETURNING customer_name, customer_email, customer_location, created_at`,
      [name, email, location, req.user.customer_id]
    );

    return res.json({
      success: true,
      message: "Account details updated successfully",
      user: {
        name: result.rows[0].customer_name,
        email: result.rows[0].customer_email,
        location: result.rows[0].customer_location,
        joined: result.rows[0].created_at,
      },
    });
  } catch (err) {
    console.error("Error updating account details:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.put("/change-password", auth, async (req, res) => {
  try {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    const current = currentPassword?.trim();
    const next = newPassword?.trim();
    const confirm = confirmPassword?.trim();

    if (!current || !next || !confirm) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (next.length < 8) {
      return res.status(400).json({
        success: false,
        message: "New password must be at least 8 characters",
      });
    }

    if (next !== confirm) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const userResult = await pool.query(
      "SELECT customer_password FROM customers WHERE customer_id = $1",
      [req.user.customer_id]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const user = userResult.rows[0];

    const isMatch = await bcrypt.compare(current, user.customer_password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    const hashedPassword = await bcrypt.hash(next, 10);

    await pool.query(
      `UPDATE customers 
       SET customer_password = $1 
       WHERE customer_id = $2`,
      [hashedPassword, req.user.customer_id]
    );

    return res.json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (err) {
    console.error("Password update error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.get("/account-details", auth, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT 
        customer_name,
        customer_email,
        customer_location,
        created_at,
        is_admin
       FROM customers
       WHERE customer_id = $1`,
      [req.user.customer_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const user = result.rows[0];

    return res.json({
      success: true,
      user: {
        name: user.customer_name,
        email: user.customer_email,
        location: user.customer_location,
        joined: user.created_at,
        isAdmin: user.is_admin || false,
      },
    });
  } catch (err) {
    console.error("Error fetching account details:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.delete("/delete-account", auth, async (req, res) => {
  try {
    console.log("DELETE /delete-account hit");
    console.log("Logged in user:", req.user);

    await pool.query(
      "DELETE FROM customers WHERE customer_id = $1",
      [req.user.customer_id]
    );

    res.clearCookie("auth_token", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
    });

    return res.json({
      success: true,
      message: "Account deleted successfully",
    });
  } catch (err) {
    console.error("Delete account error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});


app.get("/admin/customers", auth, async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT 
        c.customer_id,
        c.customer_name,
        c.customer_email,
        c.customer_phone,
        c.customer_location,
        COUNT(o.order_id) AS total_orders,
        COALESCE(SUM(o.total_amount), 0) AS total_spent
       FROM customers c
       LEFT JOIN orders o ON c.customer_id = o.customer_id
       GROUP BY 
        c.customer_id,
        c.customer_name,
        c.customer_email,
        c.customer_phone,
        c.customer_location
       ORDER BY c.customer_id ASC`
    );

    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching customers:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.delete("/admin/customers/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM customers WHERE customer_id = $1", [id]);

    res.json({
      success: true,
      message: "Customer deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting customer:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.put("/admin/customers/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email, phoneNum, location } = req.body;

    const result = await pool.query(
      `UPDATE customers
       SET customer_name = $1,
           customer_email = $2,
           customer_phone = $3,
           customer_location = $4
       WHERE customer_id = $5
       RETURNING customer_id, customer_name, customer_email, customer_phone, customer_location`,
      [fullName, email, phoneNum, location, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Customer not found",
      });
    }

    return res.json({
      success: true,
      message: "Customer updated successfully",
      customer: result.rows[0],
    });
  } catch (err) {
    console.error("Error updating customer:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.get("/admin/orders", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        o.order_id,
        o.order_code,
        c.customer_name AS customer,
        COALESCE(SUM(oi.quantity), 0) AS items,
        o.total_amount,
        o.created_at,
        o.status
      FROM orders o
      JOIN customers c ON o.customer_id = c.customer_id
      LEFT JOIN order_item oi ON o.order_id = oi.order_id
      GROUP BY 
        o.order_id, 
        o.order_code, 
        c.customer_name, 
        o.total_amount, 
        o.created_at, 
        o.status
      ORDER BY o.created_at DESC
    `);

    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

app.put("/admin/orders/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["pending", "processing", "shipped", "delivered"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const result = await pool.query(
      `
      UPDATE orders
      SET status = $1
      WHERE order_id = $2
      RETURNING *
      `,
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({
      message: "Order updated successfully",
      order: result.rows[0],
    });
  } catch (err) {
    console.error("Error updating order status:", err);
    res.status(500).json({ error: "Failed to update order status" });
  }
});

app.put("/admin/orders/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["pending", "processing", "shipped", "delivered"];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const result = await pool.query(
      `
      UPDATE orders
      SET status = $1
      WHERE order_id = $2
      RETURNING *
      `,
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.json({
      message: "Order updated successfully",
      order: result.rows[0],
    });
  } catch (err) {
    console.error("Error updating order status:", err);
    res.status(500).json({ error: "Failed to update order status" });
  }
});

// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/test-admin-route", (req, res) => {
  res.json({ message: "admin route works" });
});

if (isProduction) {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

// Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));