import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dashboard')
      .then((response) => response.json())
      .then((data) => {
        setDashboard(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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

      <section className="row g-4 mt-1">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-2">Top student</p>
              <h2 className="h4 mb-1">{loading ? 'Loading…' : dashboard?.users?.[0]?.name || 'No data'}</h2>
              <p className="mb-0 text-success fw-semibold">{loading ? '—' : `${dashboard?.users?.[0]?.score || 0} points`}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-2">Teams</p>
              <h2 className="h4 mb-1">{loading ? 'Loading…' : `${dashboard?.teams?.length || 0} active squads`}</h2>
              <p className="mb-0 text-primary fw-semibold">Weekly goal stays on track</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-2">Suggested workout</p>
              <h2 className="h4 mb-1">{loading ? 'Loading…' : dashboard?.workouts?.[0]?.title || 'Rest and recover'}</h2>
              <p className="mb-0 text-secondary">{loading ? '—' : dashboard?.workouts?.[0]?.focus || 'Keep moving'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="row g-4 mt-2">
        <div className="col-lg-7">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5 mb-3">Recent activity</h3>
              <ul className="list-group list-group-flush">
                {loading ? (
                  <li className="list-group-item px-0">Loading recent activity…</li>
                ) : dashboard?.recentActivities?.map((activity) => (
                  <li className="list-group-item px-0" key={activity._id}>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>{activity.user} logged {activity.type}</span>
                      <span className="text-muted">{activity.minutes} min</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h3 className="h5 mb-3">Team highlights</h3>
              {loading ? (
                <p className="text-muted">Loading teams…</p>
              ) : dashboard?.teams?.map((team) => (
                <div className="d-flex justify-content-between align-items-center py-2 border-bottom" key={team._id}>
                  <span className="fw-semibold">{team.name}</span>
                  <span className="badge bg-light text-dark">{team.members} members</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
