import { useEffect, useState } from 'react';
import { buildApiUrl } from '../utils/api';

const usersEndpoint = buildApiUrl('users');

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(usersEndpoint);
        const payload = await response.json();
        const list = Array.isArray(payload) ? payload : payload?.results || [];
        setUsers(list);
      } catch (error) {
        console.error(error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    }

    loadUsers();
  }, []);

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <h2 className="h5 mb-3">Users</h2>
        {loading ? (
          <p className="text-muted">Loading users…</p>
        ) : (
          <ul className="list-group list-group-flush">
            {users.map((user) => (
              <li className="list-group-item px-0" key={user._id || user.name}>
                <div className="d-flex justify-content-between align-items-center">
                  <span>{user.name}</span>
                  <span className="badge bg-primary-subtle text-primary">{user.score || 0} pts</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Users;
