// src/Contacts.js
import React, { useEffect, useState } from 'react';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/contacts')
      .then(res => res.json())
      .then(data => {
        setContacts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('❌ Error fetching contacts:', err);
        alert('Server error. Make sure backend is running.');
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Contact Messages</h2>
      {loading ? (
        <p>Loading contacts...</p>
      ) : contacts.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {contacts.map((c, idx) => (
            <li key={c._id || idx}>
              <strong>{c.name}</strong> ({c.email}) — {c.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Contacts;
