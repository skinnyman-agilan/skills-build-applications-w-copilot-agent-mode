import { Router } from 'express';
import { Activity } from '../models/Activity';

const router = Router();

router.get(['/api/activities', '/api/activities/'], async (_req, res) => {
  try {
    const activities = await Activity.find().sort({ notedAt: -1 }).lean();
    res.json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to load activities' });
  }
});

router.post(['/api/activities', '/api/activities/'], async (req, res) => {
  try {
    const activity = await Activity.create(req.body);
    res.status(201).json(activity);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Unable to create activity' });
  }
});

export default router;
