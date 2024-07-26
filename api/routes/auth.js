var express = require('express');
const jwt = require("jsonwebtoken");
var router = express.Router();

var prisma = require('../db');

const secretKey = process.env.SECRET;

router.get("/", (req, res) => {
    res.status(200).json({
        message: "Authentication endpoint"
    })
});

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body; 
        if (username && password) {
            
            const query = await prisma.users.findMany({
                where: {
                    username: username,
                },
                select: {
                    id: true,
                    username: true,
                }
            });
            if(query[0].username == username){
                const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
                res.status(200).json({
                    credentials: {
                        username: username
                    },
                    token: token,
                })
            }else{
                res.status(200).json({
                    credentials: {
                        username: username
                    },
                    data: "Invalid credentials for username and password"
                })
            }
        } else {
            throw new Error('Username and password are required');
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
module.exports = router;