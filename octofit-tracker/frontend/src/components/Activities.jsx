import { useEffect, useState } from 'react';
import { buildApiUrl } from '../utils/api';

// Codespaces endpoint target: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/
const activitiesEndpoint = buildApiUrl('activities');

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadActivities() {
      try {
        const response = await fetch(activitiesEndpoint);
        const payload = await response.json();
        const list = Array.isArray(payload) ? payload : payload?.results || [];
        setActivities(list);
      } catch (error) {
        console.error(error);
        setActivities([]);
      } finally {
        setLoading(false);
      }
    }

    loadActivities();
  }, []);

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h2 className="h5 mb-3">Activities</h2>
        {loading ? (
          <p className="text-muted">Loading activities…</p>
        ) : (
          <ul className="list-group list-group-flush">
            {activities.map((activity) => (
              <li className="list-group-item px-0" key={activity._id || activity.type + activity.user}>
                <div className="d-flex justify-content-between align-items-center">
                  <span>{activity.user} • {activity.type}</span>
                  <span className="badge bg-success-subtle text-success">{activity.minutes || 0} min</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Activities;
