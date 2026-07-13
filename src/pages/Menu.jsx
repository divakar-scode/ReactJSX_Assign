import React, { useState, useMemo } from 'react';
import foodData from '../data/foodData.json';
import FoodCard from '../components/FoodCard';
import './Menu.css';

function Menu() {
  const [cart, setCart] = useState([]);

  const memoizedFoodData = useMemo(() => foodData, []);

  const handleAddToCart = (food) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === food.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...food, quantity: 1 }];
    });
  };

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="food-grid">
        {memoizedFoodData.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
