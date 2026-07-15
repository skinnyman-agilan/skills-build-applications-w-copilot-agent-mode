"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const mongoose_1 = require("mongoose");
const activitySchema = new mongoose_1.Schema({
    user: { type: String, required: true },
    type: { type: String, required: true },
    minutes: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    notedAt: { type: Date, default: Date.now },
}, { timestamps: true });
exports.Activity = (0, mongoose_1.model)('Activity', activitySchema);
