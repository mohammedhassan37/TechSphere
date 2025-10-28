import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pkg from 'pg'

dotenv.config();
const { Pool } = pkg;

const app = express();
app.use(express.json());
app.use(cors());






const PORT = 5000 || PORT;

app.listen(PORT, () => console.log(`server running on ${PORT}`));