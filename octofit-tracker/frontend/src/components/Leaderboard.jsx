import { useEffect, useState } from 'react';
import { buildApiUrl } from '../utils/api';

// Codespaces endpoint target: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/
const leaderboardEndpoint = buildApiUrl('leaderboard');

function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const response = await fetch(leaderboardEndpoint);
        const payload = await response.json();
        const list = Array.isArray(payload) ? payload : payload?.results || [];
        setEntries(list);
      } catch (error) {
        console.error(error);
        setEntries([]);
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, []);

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h2 className="h5 mb-3">Leaderboard</h2>
        {loading ? (
          <p className="text-muted">Loading leaderboard…</p>
        ) : (
          <ol className="list-group list-group-numbered">
            {entries.map((entry, index) => (
              <li className="list-group-item" key={entry._id || entry.name}>
                <div className="d-flex justify-content-between align-items-center">
                  <span>{index + 1}. {entry.name}</span>
                  <span className="badge bg-warning-subtle text-warning">{entry.score || 0}</span>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;
