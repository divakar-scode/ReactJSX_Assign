import React, { useMemo } from 'react';
import foodData from '../data/foodData.json';
import FoodCard from '../components/FoodCard';
import './Menu.css';

function Menu({ cart, onAddToCart }) {
  const memoizedFoodData = useMemo(() => foodData, []);

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="food-grid">
        {memoizedFoodData.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
