import { Router } from 'express';
import { Activity } from '../models/Activity';
import { Team } from '../models/Team';
import { User } from '../models/User';
import { Workout } from '../models/Workout';

const router = Router();

router.get(['/api/dashboard', '/api/dashboard/'], async (_req, res) => {
  try {
    const [users, teams, activities, workouts] = await Promise.all([
      User.find().lean(),
      Team.find().lean(),
      Activity.find().sort({ notedAt: -1 }).limit(5).lean(),
      Workout.find().lean(),
    ]);

    res.json({
      users,
      teams,
      recentActivities: activities,
      workouts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to load dashboard data' });
  }
});

export default router;
