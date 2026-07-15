import { Schema, model } from 'mongoose';

const activitySchema = new Schema(
  {
    user: { type: String, required: true },
    type: { type: String, required: true },
    minutes: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    notedAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

export const Activity = model('Activity', activitySchema);
