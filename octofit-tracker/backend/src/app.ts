// import express from 'express';
// import dotenv from 'dotenv';
// import './config/database';
// import healthRoutes from './routes/health';
// import dashboardRoutes from './routes/dashboard';
// import usersRoutes from './routes/users';
// import teamsRoutes from './routes/teams';
// import activitiesRoutes from './routes/activities';
// import leaderboardRoutes from './routes/leaderboard';
// import workoutsRoutes from './routes/workouts';

// dotenv.config();

// const app = express();
// const port = Number(process.env.PORT || 8000);
// const codespaceName = process.env.CODESPACE_NAME;
// const baseUrl = codespaceName
//   ? `https://${codespaceName}-8000.app.github.dev`
//   : 'http://localhost:8000';

// app.use(express.json());
// app.use(healthRoutes);
// app.use(dashboardRoutes);
// app.use(usersRoutes);
// app.use(teamsRoutes);
// app.use(activitiesRoutes);
// app.use(leaderboardRoutes);
// app.use(workoutsRoutes);

// app.get('/', (_req, res) => {
//   res.json({ message: 'OctoFit Tracker API', baseUrl });
// });

// app.listen(port, () => {
//   console.log(`Backend listening on port ${port}`);
//   console.log(`API base URL: ${baseUrl}`);
// });
