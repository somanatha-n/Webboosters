import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h1>Welcome to WebBoosters</h1>
        <p>Your one-stop solution for Web Development & Digital Marketing.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
