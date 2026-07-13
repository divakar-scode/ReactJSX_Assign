import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <p>
          Welcome to Food Order App - Your ultimate destination for delicious food delivery!
        </p>
        <p>
          Our mission is to bring your favorite restaurants and dishes right to your doorstep
          with the highest quality service and fastest delivery times.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✓ Wide variety of restaurants and cuisines</li>
          <li>✓ Fast and reliable delivery</li>
          <li>✓ Secure payment options</li>
          <li>✓ 24/7 customer support</li>
          <li>✓ Special discounts and offers</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
