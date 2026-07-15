"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
const router = (0, express_1.Router)();
router.get(['/api/leaderboard', '/api/leaderboard/'], async (_req, res) => {
    try {
        const leaderboard = await User_1.User.find().sort({ score: -1 }).lean();
        res.json(leaderboard);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to load leaderboard' });
    }
});
exports.default = router;
