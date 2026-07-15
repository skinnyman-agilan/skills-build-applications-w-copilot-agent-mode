import mongoose from 'mongoose';
import { User } from '../models/User';
import { Team } from '../models/Team';
import { Activity } from '../models/Activity';
import { Workout } from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const teams = await Team.create([
      { name: 'Blue Rockets', color: 'primary', members: 14, weeklyGoal: 1400 },
      { name: 'Green Thunder', color: 'success', members: 11, weeklyGoal: 1250 },
    ]);

    const users = await User.create([
      { name: 'Ava Chen', score: 1280, streak: 6, team: teams[0].name, badge: 'Streak Keeper' },
      { name: 'Luis Rivera', score: 1210, streak: 5, team: teams[0].name, badge: 'Sprint Star' },
      { name: 'Mina Patel', score: 1150, streak: 4, team: teams[1].name, badge: 'Consistency Champ' },
      { name: 'Noah Brooks', score: 1090, streak: 3, team: teams[1].name, badge: 'Calm Climber' },
    ]);

    await Activity.create([
      { user: users[0].name, type: 'Run', minutes: 35, points: 180, notedAt: new Date('2026-07-15T06:00:00Z') },
      { user: users[1].name, type: 'Strength', minutes: 28, points: 140, notedAt: new Date('2026-07-15T07:30:00Z') },
      { user: users[2].name, type: 'Walk', minutes: 42, points: 160, notedAt: new Date('2026-07-15T08:00:00Z') },
    ]);

    await Workout.create([
      { title: 'Cardio Ladder', focus: 'Endurance', duration: '20 min', difficulty: 'Intermediate' },
      { title: 'Core Burn', focus: 'Core', duration: '15 min', difficulty: 'Beginner' },
      { title: 'Power Circuit', focus: 'Strength', duration: '25 min', difficulty: 'Advanced' },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
