var express = require('express');
var router = express.Router();
var verifyToken = require("../helpers/verifyToken");

var db = require("../db");
const prisma = require('../db');

router.get("/", async (req, res) => {
    const information = await prisma.app_info.findMany();

    res.status(200).json({
        message: "Returning API information",
        data: information
    });    
});

router.get("/personal", verifyToken, (req, res) => {
    res.status(200).json({
        message: "Sending a personal message to mirinda, mua!"
    })
});
module.exports = router;