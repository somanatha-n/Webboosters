import React, { useEffect, useState } from 'react';
import './ViewContacts.css';

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      console.log('⏳ Fetching contacts from:', process.env.REACT_APP_API_URL);
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`);
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await response.json();
        console.log('✅ Fetched contacts:', data);
        setContacts(data);
      } catch (err) {
        console.error('❌ Error fetching contacts:', err);
        setError('Failed to load contact messages.');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
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
