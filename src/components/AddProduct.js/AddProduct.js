import React, { useState } from 'react';

function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price) {
      setMessage('❌ Please fill in both name and price');
      return;
    }

    const product = { name, price };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Failed to save product');
      }

      setMessage('✅ Product saved successfully!');
      setName('');
      setPrice('');
    } catch (error) {
      console.error(error);
      setMessage('❌ Error saving product. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Add Product</h2>

      <label>
        Product Name:
        <input
          type="text"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px' }}
        />
      </label>

      <label>
        Product Price:
        <input
          type="number"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px' }}
        />
      </label>

      <button type="submit" style={{ width: '100%', padding: '8px' }}>
        Save Product
      </button>

      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </form>
  );
}

export default AddProduct;
