import express from 'express';
import dotenv from 'dotenv';
import './config/database';
import healthRoutes from './routes/health';
import dashboardRoutes from './routes/dashboard';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(express.json());
app.use(healthRoutes);
app.use(dashboardRoutes);

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API' });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
