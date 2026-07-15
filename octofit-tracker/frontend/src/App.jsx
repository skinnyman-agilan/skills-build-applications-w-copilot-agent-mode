import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="container py-4">
      <header className="rounded-4 p-4 text-white shadow-sm" style={{ background: 'linear-gradient(135deg, #1d4ed8, #0f172a)' }}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
          <div>
            <p className="mb-2 text-uppercase fw-semibold small opacity-75">OctoFit Tracker</p>
            <h1 className="h2 mb-2">Fitness challenge dashboard</h1>
            <p className="mb-0 opacity-75">Track progress, celebrate streaks, and coach every student.</p>
          </div>
          <div className="bg-white text-dark rounded-pill px-3 py-2 fw-semibold">Live activity board</div>
        </div>
      </header>

      <nav className="nav nav-pills mt-4 flex-wrap gap-2">
        <Link className="nav-link active" to="/">Overview</Link>
        <Link className="nav-link" to="/users">Users</Link>
        <Link className="nav-link" to="/teams">Teams</Link>
        <Link className="nav-link" to="/activities">Activities</Link>
        <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
        <Link className="nav-link" to="/workouts">Workouts</Link>
      </nav>

      <div className="mt-4">
        <Routes>
          <Route path="/" element={<div className="row g-4"><div className="col-lg-6"><Users /></div><div className="col-lg-6"><Teams /></div><div className="col-lg-6"><Activities /></div><div className="col-lg-6"><Workouts /></div></div>} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
