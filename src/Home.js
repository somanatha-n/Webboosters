// Home.js
import React from 'react';
import './Home.css';

function Home() {
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
