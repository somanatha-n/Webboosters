import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>Web Boosters</h3>
        <p>Boosting your web presence with modern solutions.</p>
        <p>&copy; {new Date().getFullYear()} Web Boosters. All rights reserved.</p>
      </div>

      <div className="footer-center">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
        </ul>
      </div>

      <div className="footer-right">
        <h4>Contact</h4>
        <p>Email: info@webboosters.com</p>
        <p>Phone: +91-9535952643</p>
        <p>Location: Tech City, India</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
