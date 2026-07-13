import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Food Order App</h1>
          <p>Delicious food delivered to your doorstep</p>
          <Link to="/menu" className="browse-btn">
            Browse Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
