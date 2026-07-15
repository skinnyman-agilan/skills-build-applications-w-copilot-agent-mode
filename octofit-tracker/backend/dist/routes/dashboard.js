"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Activity_1 = require("../models/Activity");
const Team_1 = require("../models/Team");
const User_1 = require("../models/User");
const Workout_1 = require("../models/Workout");
const router = (0, express_1.Router)();
router.get(['/api/dashboard', '/api/dashboard/'], async (_req, res) => {
    try {
        const [users, teams, activities, workouts] = await Promise.all([
            User_1.User.find().lean(),
            Team_1.Team.find().lean(),
            Activity_1.Activity.find().sort({ notedAt: -1 }).limit(5).lean(),
            Workout_1.Workout.find().lean(),
        ]);
        res.json({
            users,
            teams,
            recentActivities: activities,
            workouts,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to load dashboard data' });
    }
});
exports.default = router;
