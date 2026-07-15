"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
require("./config/database");
const health_1 = __importDefault(require("./routes/health"));
const dashboard_1 = __importDefault(require("./routes/dashboard"));
const users_1 = __importDefault(require("./routes/users"));
const teams_1 = __importDefault(require("./routes/teams"));
const activities_1 = __importDefault(require("./routes/activities"));
const leaderboard_1 = __importDefault(require("./routes/leaderboard"));
const workouts_1 = __importDefault(require("./routes/workouts"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT || 8000);
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
app.use(express_1.default.json());
app.use(health_1.default);
app.use(dashboard_1.default);
app.use(users_1.default);
app.use(teams_1.default);
app.use(activities_1.default);
app.use(leaderboard_1.default);
app.use(workouts_1.default);
app.get('/', (_req, res) => {
    res.json({ message: 'OctoFit Tracker API', baseUrl });
});
app.listen(port, () => {
    console.log(`Backend listening on port ${port}`);
    console.log(`API base URL: ${baseUrl}`);
});
