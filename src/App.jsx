import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
<<<<<<< HEAD
  const [cartItems, setCartItems] = useState([]);
=======
>>>>>>> 221d2efec6db376a6fa03aa47cc77e9b72bd0b10

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

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <Navigation cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu cart={cart} onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} setCartItems={setCart} />} />
<<<<<<< HEAD
        <Route path="/checkout" element={<Checkout cartItems={cart} />} />        
=======
        <Route path="/checkout" element={<Checkout cartItems={cart} />} />
>>>>>>> 221d2efec6db376a6fa03aa47cc77e9b72bd0b10
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;