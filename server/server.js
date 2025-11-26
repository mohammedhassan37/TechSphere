import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pkg from 'pg'
import bcrypt from 'bcrypt';

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

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


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));