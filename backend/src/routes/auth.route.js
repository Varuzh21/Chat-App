import express from 'express';

const router = express.Router();

router.post("/signup",)

router.post("/login", (req, res) => {
    res.send("login router");
})

router.post("/logout", (req, res) => {
    res.send("logout router");
})

export default router;