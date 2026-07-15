import { Router } from 'express';
import { User } from '../models/User';

const router = Router();

router.get(['/api/leaderboard', '/api/leaderboard/'], async (_req, res) => {
  try {
    const leaderboard = await User.find().sort({ score: -1 }).lean();
    res.json(leaderboard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to load leaderboard' });
  }
});

export default router;
