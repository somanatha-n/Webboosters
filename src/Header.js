import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>🌐 Web Boosters</h1>
      <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/view-contacts">View Contacts</Link> {/* ✅ Added here */}
      </nav>
    </header>
  );
};

export default Header;
