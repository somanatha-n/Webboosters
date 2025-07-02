// Blogs.js
import React from 'react';
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
        <a href="#">Read Full Blog</a>
      </section>

      <section className="blog">
        <h2>Why MERN Stack is Still a Top Choice</h2>
        <p className="blog-meta">Category: Full Stack | Tags: MongoDB, Express, React, Node.js</p>
        <p>
          MERN stack continues to be the go-to for full stack developers. Learn why it's powerful and how to get started.
        </p>
        <a href="#">Read Full Blog</a>
      </section>

      <section className="blog">
        <h2>Improving Website Performance: Best Practices</h2>
        <p className="blog-meta">Category: Performance | Tags: Lighthouse, SEO, Lazy Loading</p>
        <p>
          Learn how to reduce load time, improve SEO scores, and create faster websites using modern optimization techniques.
        </p>
        <a href="#">Read Full Blog</a>
      </section>
    </div>
  );
}

export default Blogs;
