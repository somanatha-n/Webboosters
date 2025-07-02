import React, { useEffect, useState } from 'react';
import './User.css';

const User = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => {
        if (!res.ok) throw new Error('Server error');
        return res.json();
      })
      .then((data) => {
        console.log('✅ Users fetched:', data);
        setUsers(data);
      })
      .catch((err) => {
        console.error('❌ Fetch failed:', err);
        setError('Could not load users.');
      });
  }, []);

  return (
    <div className="user-container">

      <h1>All Users</h1>

      {error && <p className="error">{error}</p>}

      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul className="user-grid">
          {users.map((user) => (
            <li key={user._id} className="user-card">
              <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name)}`}
                alt={user.name}
                className="user-avatar"
              />
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default User;
