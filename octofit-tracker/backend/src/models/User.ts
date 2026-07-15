import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    score: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    team: { type: String, required: true },
    badge: { type: String, default: 'Starter' },
  },
  { timestamps: true },
);

export const User = model('User', userSchema);
