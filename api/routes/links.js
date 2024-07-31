const express = require('express');
const router = express.Router();

const verifyToken = require('../helpers/verifyToken');
const prisma = require("../db");

// Endpoint to get all links made by given user
router.get("/", verifyToken, async (req, res) => {
    try {
        const username = req.username; 
        const user = await prisma.users.findUnique({
            where: {
                username: username
            },
            select: {
                id: true,
            },
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const userId = user.id; 
        const links = await prisma.links.findMany({
            where: {
                madeby: userId,
            },
            select: {
                id: true,
                madeby: true,
                short_link: true,
                isActive: true,
                link: true,
                description: true,
                isPublic: true
            }
        });
        if (links.length === 0) {
            return res.status(404).json({ message: "Data not found" });
        }
        res.status(200).json({
            data: links,
            userID: userId,
        });
    } catch (error) {
        res.status(500).json({
            message: "An error has occurred",
            error: error.message
        });
    }
});
// Endpoint to create a shorten link
router.post("/new", verifyToken, async (req, res) => {
    try {
        const { short_link, link } = req.body;
        const username = req.username;

        console.log("Received request:", { short_link, link, username });

        const user = await prisma.users.findUnique({
            where: {
                username: username
            },
            select: {
                id: true,
            },
        });

        console.log("Found user:", user);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("Attempting to create link with data:", {
            madeby: user.id,
            short_link,
            link,
            isActive: true
        });

        const newLink = await prisma.links.create({
            data: {
                madeby: user.id,
                short_link,
                link,
                isActive: true,
            },
        });

        console.log("Created new link:", newLink);

        res.status(201).json({
            message: "Link created successfully",
            link: newLink,
        });
    } catch (error) {
        console.error("Error creating link:", error);
        res.status(500).json({
            message: "An error has occurred",
            error: error.message.toString()
        });
    }
});

module.exports = router;