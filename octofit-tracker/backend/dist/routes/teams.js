"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Team_1 = require("../models/Team");
const router = (0, express_1.Router)();
router.get(['/api/teams', '/api/teams/'], async (_req, res) => {
    try {
        const teams = await Team_1.Team.find().lean();
        res.json(teams);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Unable to load teams' });
    }
});
router.post(['/api/teams', '/api/teams/'], async (req, res) => {
    try {
        const team = await Team_1.Team.create(req.body);
        res.status(201).json(team);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Unable to create team' });
    }
});
exports.default = router;
