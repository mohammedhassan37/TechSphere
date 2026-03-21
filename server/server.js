import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pkg from 'pg';
import cookieParser from 'cookie-parser';
import path from "path";
import { fileURLToPath } from "url";


dotenv.config();
const { Pool } = pkg;

console.log("DATABASE_URL:", process.env.DATABASE_URL);


// Database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } 
});

const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
  'http://localhost:5173',               // local dev
  'https://techsphere-8ec2.onrender.com' // deployed frontend
];

app.use(cors({
    origin:allowedOrigins,
    credentials: true
}));

//SIGNUP
app.post('/signup', async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {
        return res
        .status(400)
        .json({ success: false, message: "Fields cannot be empty" });
    }

    if (password !== confirmPassword) {
        return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });
    }

    // Check if user exists
    const existingUser = await pool.query(
      "SELECT * FROM customers WHERE customer_email = $1",
        [email]
    );

    if (existingUser.rows.length > 0) {
        return res
        .status(400)
        .json({ success: false, message: "Email already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    await pool.query(
        "INSERT INTO customers (customer_email, customer_password) VALUES ($1, $2)",
        [email, hashedPassword]
    );

    return res
        .status(201)
        .json({ success: true, message: "Email has been registered." });
    } catch (err) {
    console.error(err);
    return res
        .status(500)
        .json({ success: false, message: "Server error" });
    }
});

// LOGIN
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "Fields cannot be empty" });
        }

        // Correct PostgreSQL query + correct table name + correct variable structure
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

        // Correct password comparison
        const isMatch = await bcrypt.compare(password, user.customer_password);

        if (!isMatch) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid credentials" });
        }



        const token = jwt.sign(
            {customer_id: user.customer_id, email: user.customer_email},
            process.env.JWT_SECRET,
            {expiresIn: "7d"}
        );

        res.cookie("auth_token", token,{
            httpOnly:true,
            secure:true,
            sameSite:"none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });


        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: { id: user.customer_id, email: user.customer_email }
        });
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ success: false, message: "Server error" });
    }
});

function auth(req, res, next) {
    const token = req.cookies.auth_token; // ADDED (read JWT cookie)

    if (!token)
        return res.status(401).json({ success: false, message: "Not logged in" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // ADDED
        req.user = decoded; // ADDED
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
}

//Logout 
app.post("/logout", (req, res) => {
    res.clearCookie("auth_token", { // ADDED
        httpOnly: true,
        secure: true,
        sameSite: "none"
    });

    return res.json({ success: true, message: "Logged out" });
});


// Contact Form 

app.post('/contact', async (req, res) => {
    try {
        const { name, EmailAddress, Inquiry } = req.body;

        if (!name || !EmailAddress || !Inquiry) {
            return res.status(400).json({ success: false, message: "Fields cannot be empty" });
        }

        // FIXED — previously inserted into wrong table
        await pool.query(
            "INSERT INTO customer_text (customer_name, customer_email, customer_text) VALUES ($1, $2, $3)",
            [name, EmailAddress, Inquiry]
        );

        return res.status(201).json({
            success: true,
            message: "Message received!"
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Server error" });
    }
});

// Product Search

app.get("/search", async (req, res) => {
    const { q } = req.query;

    try {
        const result = await pool.query(
            `SELECT * FROM products 
             WHERE LOWER(product_name) LIKE LOWER($1)`,
            [`%${q}%`]
        );

        res.json(result.rows);

    } catch(err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});


app.get("/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY product_id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});



// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

// Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
