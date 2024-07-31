const express = require('express');
const router = express.Router();

const verifyToken = require('../helpers/verifyToken');
const prisma = require("../db");

router.get('/', verifyToken, async (req, res) => {
    try {
        const username = req.username;
        const response = await prisma.users.findUnique({
            where: {
                username: username
            },
            select: {
                username: true,
                added_at: true,
                email: true,
            }
        });
        if (!response) {
            throw new Error("Something went wrong retrieving user data");
        }

        // Simular una espera de 5 segundos
        setTimeout(() => {
            res.status(200).json({
                data: response
            });
        }, 0);

    } catch (error) {
        res.status(404).json({
            message: "An error has occurred",
            error: error.message // .message para enviar solo el mensaje de error
        });
    }
});

module.exports = router;