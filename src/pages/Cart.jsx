import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  const handleIncreaseQuantity = useCallback((id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, [setCartItems]);

  const handleDecreaseQuantity = useCallback((id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, [setCartItems]);

  const handleRemoveItem = useCallback((id) => {
  const itemToRemove = cartItems.find((item) => item.id === id);
    const confirmRemove = window.confirm(
      `Are you sure you want to remove "${itemToRemove?.name}" from your cart?`
    );

if (confirmRemove) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
<<<<<<< HEAD
  }
}, [cartItems, setCartItems]);
=======
  }, [setCartItems]);
>>>>>>> 221d2efec6db376a6fa03aa47cc77e9b72bd0b10

  const handleAddItems = () => {
    navigate('/menu');
  };

  const handleCheckout = () => {
<<<<<<< HEAD
    navigate('/checkout', { state: { cartItems } });
=======
    navigate('/checkout');
>>>>>>> 221d2efec6db376a6fa03aa47cc77e9b72bd0b10
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p className="empty-message">Your cart is empty. Start shopping now!</p>
<<<<<<< HEAD
          <button className="submit-btn" onClick={handleAddItems}>
           Browse Menu to add Items
=======
          <button className="add-items-btn" onClick={handleAddItems}>
            Add Items
>>>>>>> 221d2efec6db376a6fa03aa47cc77e9b72bd0b10
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price.toFixed(2)}</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => handleDecreaseQuantity(item.id)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total Items: <strong>{totalItems}</strong></p>
            <p>Total Amount: <strong>₹{totalAmount.toFixed(2)}</strong></p>
            <div className="cart-actions">
<<<<<<< HEAD
              <button className="submit-btn" onClick={handleAddItems}>
                + Add Items
              </button>
              <button className="submit-btn" onClick={handleCheckout}>
=======
              <button className="add-items-btn" onClick={handleAddItems}>
                + Add Items
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
>>>>>>> 221d2efec6db376a6fa03aa47cc77e9b72bd0b10
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;