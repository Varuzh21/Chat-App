import express from 'express';
import authRouters from './routes/auth.route.js';
import messageRouters from './routes/message.route.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.js';
import cors from "cors";

const app = express();

dotenv.config();
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use("/api/auth", authRouters);
app.use("/api/message", messageRouters);

app.listen(PORT, () => {
    console.log('Server is running on port 5000');
    connectDB()
})