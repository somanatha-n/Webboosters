import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/posts`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch posts');
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div
      className="home-page"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/istockphoto-1182398947-1024x1024.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '2rem',
        color: '#fff',
      }}
    >
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Web Boosters</h1>
        <p>Your gateway to modern web development.</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-card">🌐 Web Design</div>
          <div className="service-card">⚙️ Full Stack Development</div>
          <div className="service-card">🚀 Performance Optimization</div>
          <div className="service-card">📈 SEO & Marketing</div>
        </div>
      </section>

      {/* Dynamic Posts from Backend */}
      <section className="posts-section">
        <h2>Latest Posts</h2>
        {loading ? (
          <p>Loading posts...</p>
        ) : posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post._id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h3>Ready to boost your web presence?</h3>
        <a href="/contact">
          <button className="cta-button">Contact Us</button>
        </a>
      </section>
    </div>
  );
}

export default Home;
