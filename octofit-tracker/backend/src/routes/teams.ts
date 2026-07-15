import { Router } from 'express';
import { Team } from '../models/Team';

const router = Router();

router.get(['/api/teams', '/api/teams/'], async (_req, res) => {
  try {
    const teams = await Team.find().lean();
    res.json(teams);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to load teams' });
  }
});

router.post(['/api/teams', '/api/teams/'], async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json(team);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Unable to create team' });
  }
});

export default router;
