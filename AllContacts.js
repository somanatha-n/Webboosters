import React, { useEffect, useState } from 'react';
import './Contact.css';

const AllContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/contact')
      .then((res) => {
        if (!res.ok) throw new Error('Server error');
        return res.json();
      })
      .then((data) => setContacts(data))
      .catch((err) => {
        console.error('❌ Fetch failed:', err);
        setError('Could not load contacts.');
      });
  }, []);

  return (
    <div className="contact-container">
      <h1>All Contact Messages</h1>
      {error && <p className="error">{error}</p>}
      {contacts.length === 0 ? (
        <p>No messages found</p>
      ) : (
        <ul className="user-grid">
          {contacts.map((msg) => (
            <li key={msg._id} className="user-card">
              <div className="user-info">
                <div className="user-name">{msg.name}</div>
                <div className="user-email">{msg.email}</div>
                <p>{msg.message}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllContacts;
