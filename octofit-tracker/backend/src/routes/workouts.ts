import { Router } from 'express';
import { Workout } from '../models/Workout';

const router = Router();

router.get(['/api/workouts', '/api/workouts/'], async (_req, res) => {
  try {
    const workouts = await Workout.find().lean();
    res.json(workouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to load workouts' });
  }
});

router.post(['/api/workouts', '/api/workouts/'], async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(201).json(workout);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Unable to create workout' });
  }
});

export default router;
