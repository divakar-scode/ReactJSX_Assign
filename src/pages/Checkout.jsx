import React, { useState } from 'react';
import './Checkout.css';

function Checkout({ cartItems = [] }) {
  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    deliveryAddress: '',
    paymentMethod: 'card',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.customerName &&
      formData.mobileNumber &&
      formData.deliveryAddress
    ) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          customerName: '',
          mobileNumber: '',
          deliveryAddress: '',
          paymentMethod: 'card',
        });
        setSubmitted(false);
      }, 3000);
    } else {
      alert('Please fill all mandatory fields');
    }
  };

  // Calculate totals
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {submitted ? (
        <div className="success-message">
          ✓ Order placed successfully! Your order will be delivered soon.
        </div>
      ) : (
        <div className="checkout-wrapper">
          <form className="checkout-form" onSubmit={handleSubmit}>
            {/* Cart Summary Section */}
          <div className="order-summary">
            <h2>Order Summary</h2>
            {cartItems.length === 0 ? (
              <p className="empty-summary">Your cart is empty</p>
            ) : (
              <>
                
                <div className="summary-divider"></div>
                <div className="summary-totals">
                  <div className="total-items">
                    <span>Total Items:</span>
                    <strong>{totalItems}</strong>
                  </div>
                  <div className="total-amount">
                    <span>Total Amount:</span>
                    <strong className="amount">₹{totalAmount.toFixed(2)}</strong>
                  </div>
                </div>
              </>
            )}
          </div>
            <div className="form-group">
              <label htmlFor="customerName">Customer Name *</label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number *</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="deliveryAddress">Delivery Address *</label>
              <textarea
                id="deliveryAddress"
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="paymentMethod">Payment Method</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
              >
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="netbanking">Net Banking</option>
                <option value="wallet">Digital Wallet</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Place Order
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Checkout;