"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Activity_1 = require("../models/Activity");
const router = (0, express_1.Router)();
router.get(['/api/activities', '/api/activities/'], async (_req, res) => {
    try {
        const activities = await Activity_1.Activity.find().sort({ notedAt: -1 }).lean();
        res.json(activities);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to load activities' });
    }
});
router.post(['/api/activities', '/api/activities/'], async (req, res) => {
    try {
        const activity = await Activity_1.Activity.create(req.body);
        res.status(201).json(activity);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Unable to create activity' });
    }
});
exports.default = router;
