const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');

dotenv.config();

const RATE_LIMIT_WINDOW_MS = process.env.RATE_LIMIT_WINDOW_MS;
const RATE_LIMIT_CALLS = process.env.RATE_LIMIT_CALLS;

const messageLoad = {
    status: 400,
    message: "To many request perfomed on this given IP",
};

const limiter = rateLimit({
    windowMs: RATE_LIMIT_WINDOW_MS,
    max: RATE_LIMIT_CALLS,
    message: messageLoad
});

module.exports = limiter;