import React, { useState } from 'react';
import './AddUser.css';

const AddUser = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('✅ User added successfully!');
        setFormData({ name: '', email: '' }); // Clear form
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      setMessage('❌ Failed to connect to the server');
    }
  };

  return (
    <div className="add-user-container">
      <h2>Add User</h2>
      {message && (
        <p className={message.startsWith('✅') ? 'success' : 'error'}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
