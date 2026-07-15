import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, default: 'primary' },
    members: { type: Number, default: 0 },
    weeklyGoal: { type: Number, default: 1200 },
  },
  { timestamps: true },
);

export const Team = model('Team', teamSchema);
