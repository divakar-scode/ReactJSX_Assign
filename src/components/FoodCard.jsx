import React from 'react';
import './FoodCard.css';

function FoodCard({ food, onAddToCart }) {
  const handleClick = () => {
    onAddToCart(food);
    // Show alert when item is added to cart
    alert(`${food.name} has been added to your cart!`);
  };

  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} className="food-image" />
      <div className="food-info">
        <h3>{food.name}</h3>
        <p className="description">{food.description}</p>
        <p className="price">₹{food.price.toFixed(2)}</p>
        <button className="add-to-cart-btn" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
