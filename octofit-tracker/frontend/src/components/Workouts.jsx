import { useEffect, useState } from 'react';
import { buildApiUrl } from '../utils/api';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWorkouts() {
      try {
        const response = await fetch(buildApiUrl('workouts'));
        const payload = await response.json();
        const list = Array.isArray(payload) ? payload : payload?.results || [];
        setWorkouts(list);
      } catch (error) {
        console.error(error);
        setWorkouts([]);
      } finally {
        setLoading(false);
      }
    }

    loadWorkouts();
  }, []);

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h2 className="h5 mb-3">Workouts</h2>
        {loading ? (
          <p className="text-muted">Loading workouts…</p>
        ) : (
          <ul className="list-group list-group-flush">
            {workouts.map((workout) => (
              <li className="list-group-item px-0" key={workout._id || workout.title}>
                <div className="d-flex justify-content-between align-items-center">
                  <span>{workout.title}</span>
                  <span className="badge bg-info-subtle text-info">{workout.duration || '—'}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Workouts;
