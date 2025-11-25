import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pkg from 'pg'

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

const app = express();
app.use(express.json());
app.use(cors());





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));