import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import foodData from '../data/foodData.json';
import FoodCard from '../components/FoodCard';
import './Menu.css';

function Menu({ cart, onAddToCart }) {
  const ITEMS_PER_PAGE = 6;
  const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);
  const observerTarget = useRef(null);
  const memoizedFoodData = useMemo(() => foodData, []);

  // Load more items when user scrolls to bottom
  const loadMore = useCallback(() => {
    setDisplayedItems((prev) => 
      Math.min(prev + ITEMS_PER_PAGE, memoizedFoodData.length)
    );
  }, [memoizedFoodData.length]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && displayedItems < memoizedFoodData.length) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [displayedItems, loadMore, memoizedFoodData.length]);

  const visibleFoodData = memoizedFoodData.slice(0, displayedItems);

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="food-grid">
        {visibleFoodData.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
      
      {/* Loading indicator and scroll trigger target */}
      {displayedItems < memoizedFoodData.length && (
        <div ref={observerTarget} className="loading-trigger">
          <div className="spinner"></div>
          <p>Loading more items...</p>
        </div>
      )}
      
      {displayedItems >= memoizedFoodData.length && (
        <div className="end-message">
          <p>No more items to load</p>
        </div>
      )}
    </div>
  );
}

export default Menu;
