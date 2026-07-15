import { useEffect, useState } from 'react';
import { buildApiUrl } from '../utils/api';

const teamsEndpoint = buildApiUrl('teams');

function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTeams() {
      try {
        const response = await fetch(teamsEndpoint);
        const payload = await response.json();
        const list = Array.isArray(payload) ? payload : payload?.results || [];
        setTeams(list);
      } catch (error) {
        console.error(error);
        setTeams([]);
      } finally {
        setLoading(false);
      }
    }

    loadTeams();
  }, []);

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h2 className="h5 mb-3">Teams</h2>
        {loading ? (
          <p className="text-muted">Loading teams…</p>
        ) : (
          <ul className="list-group list-group-flush">
            {teams.map((team) => (
              <li className="list-group-item px-0" key={team._id || team.name}>
                <div className="d-flex justify-content-between align-items-center">
                  <span>{team.name}</span>
                  <span className="badge bg-secondary-subtle text-secondary">{team.members || 0} members</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Teams;
