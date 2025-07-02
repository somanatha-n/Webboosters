// Footer.js
import React from 'react';
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
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/posts">Posts</a></li>
          <li><a href="/blogs">Blogs</a></li>
        </ul>
      </div>

      <div className="footer-right">
        <h4>Contact</h4>
        <p>Email: info@webboosters.com</p>
        <p>Phone: +91-9876543210</p>
        <p>Location: Tech City, India</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
