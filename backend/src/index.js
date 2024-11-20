import express from 'express';
import authRouters from './routes/auth.route.js';

const app = express();

app.use("/api/auth", authRouters);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})