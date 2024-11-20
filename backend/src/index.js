import express from 'express';
import authRouters from './routes/auth.route.js';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';

const app = express();

dotenv.config();
const PORT = process.env.PORT

app.use("/api/auth", authRouters);

app.listen(PORT, () => {
    console.log('Server is running on port 5000');
    connectDB()
})