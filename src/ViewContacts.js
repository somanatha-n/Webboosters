import React, { useEffect, useState } from 'react';
import './ViewContacts.css';

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('⏳ Fetching contacts...');
    fetch('http://localhost:5000/api/contact')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch contacts');
        return res.json();
      })
      .then((data) => {
        console.log('✅ Fetched contacts:', data);
        setContacts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('❌ Error:', err);
        setError('Failed to load contact messages.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="contact-list-container">
      <h1>📨 Contact Messages</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && contacts.length === 0 && !error && (
        <p>No contact messages found.</p>
      )}
      <p><strong>Debug contacts length:</strong> {contacts.length}</p>

      <ul className="contact-grid">
        {contacts.map((c) => (
          <li key={c._id} className="contact-card">
            <h3>{c.name}</h3>
            <p><strong>Email:</strong> {c.email}</p>
            <p><strong>Message:</strong> {c.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewContacts;
