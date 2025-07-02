// Posts.js
import React from 'react';
import './Posts.css';

function Posts() {
  return (
    <div className="posts-page">
      <h1>Latest Posts from Web Boosters</h1>
      <section className="post">
        <h2>MERN Stack Explained</h2>
        <p className="post-meta">Tags: MongoDB, Express, React, Node.js</p>
        <p>
          Learn how the MERN stack powers full-stack JavaScript development. We break down each component and show how they work together to build dynamic web apps.
        </p>
        <a href="#">Read More</a>
      </section>

      <section className="post">
        <h2>Mastering React Components</h2>
        <p className="post-meta">Tags: React, JSX, Props, State</p>
        <p>
          Understand functional vs class components, hooks, and best practices to create scalable React apps.
        </p>
        <a href="#">Read More</a>
      </section>

      <section className="post">
        <h2>SEO Tips for JavaScript Websites</h2>
        <p className="post-meta">Tags: SEO, JavaScript, Web Optimization</p>
        <p>
          Boost your site's visibility with structured content, meta tags, sitemap setup, and server-side rendering options.
        </p>
        <a href="#">Read More</a>
      </section>
    </div>
  );
}

export default Posts;
