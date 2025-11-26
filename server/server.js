import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcrypt';
import pkg from 'pg';
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const { Pool } = pkg;

// Database
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

const app = express();
app.use(express.json());
app.use(cors());

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

        return res
            .status(200)
            .json({ success: true, message: "Login successful" });

    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .json({ success: false, message: "Server error" });
    }
});


// Get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve React static files
app.use(express.static(path.join(__dirname, "../client/dist")));

// Catch-all route for React (must come after API routes)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
