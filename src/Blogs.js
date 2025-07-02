import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';

function Blogs() {
  return (
    <div className="blogs-page">
      <h1>Web Development Blogs</h1>

      <section className="blog">
        <h2>Top 5 JavaScript Frameworks in 2025</h2>
        <p className="blog-meta">Category: JavaScript | Tags: React, Vue, Svelte</p>
        <p>
          Explore the most popular JavaScript frameworks and libraries developers are using in 2025, including React, Vue, and more.
        </p>
        <Link to="/blog/js-frameworks">Read Full Blog</Link>
      </section>

      <section className="blog">
        <h2>Why MERN Stack is Still a Top Choice</h2>
        <p className="blog-meta">Category: Full Stack | Tags: MongoDB, Express, React, Node.js</p>
        <p>
          MERN stack continues to be the go-to for full stack developers. Learn why it's powerful and how to get started.
        </p>
        <Link to="/blog/mern-stack">Read Full Blog</Link>
      </section>

      <section className="blog">
        <h2>Improving Website Performance: Best Practices</h2>
        <p className="blog-meta">Category: Performance | Tags: Lighthouse, SEO, Lazy Loading</p>
        <p>
          Learn how to reduce load time, improve SEO scores, and create faster websites using modern optimization techniques.
        </p>
        <Link to="/blog/performance">Read Full Blog</Link>
      </section>
    </div>
  );
}

export default Blogs;
