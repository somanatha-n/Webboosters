import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';
import Blogs from './Blogs';
import AddUser from './AddUser';
import User from './User';
import ViewContacts from './ViewContacts';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/user" element={<User />} />
            <Route path="/view-contacts" element={<ViewContacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
