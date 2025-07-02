// About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1>About Web Boosters</h1>
      <p>
        Web Boosters is a modern web development initiative focused on delivering fast,
        responsive, and engaging websites and applications using the latest technologies.
      </p>

      <h2>Our Mission</h2>
      <p>
        To empower individuals and businesses by creating web experiences that are not only beautiful but also performant and scalable.
      </p>

      <h2>What We Do</h2>
      <ul>
        <li>⚡ Build full-stack applications with MERN (MongoDB, Express, React, Node.js)</li>
        <li>🎨 Create clean, modern UIs with responsive design</li>
        <li>🚀 Optimize for speed, SEO, and scalability</li>
        <li>📚 Share knowledge through posts and blogs</li>
      </ul>

      <h2>Technologies We Use</h2>
      <div className="tech-list">
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
        <span>Express</span>
        <span>HTML/CSS</span>
        <span>GitHub</span>
      </div>

      <h3>Want to work with us?</h3>
      <a href="/contact"><button className="about-button">Contact Us</button></a>
    </div>
  );
}

export default About;
