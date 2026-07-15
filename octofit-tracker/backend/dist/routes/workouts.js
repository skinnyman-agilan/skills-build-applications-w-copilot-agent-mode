"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Workout_1 = require("../models/Workout");
const router = (0, express_1.Router)();
router.get(['/api/workouts', '/api/workouts/'], async (_req, res) => {
    try {
        const workouts = await Workout_1.Workout.find().lean();
        res.json(workouts);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to load workouts' });
    }
});
router.post(['/api/workouts', '/api/workouts/'], async (req, res) => {
    try {
        const workout = await Workout_1.Workout.create(req.body);
        res.status(201).json(workout);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Unable to create workout' });
    }
});
exports.default = router;
