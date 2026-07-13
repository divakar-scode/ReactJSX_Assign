import React, { useState } from 'react';
import './Checkout.css';

function Checkout() {
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

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {submitted ? (
        <div className="success-message">
          ✓ Order placed successfully! Your order will be delivered soon.
        </div>
      ) : (
        <form className="checkout-form" onSubmit={handleSubmit}>
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
      )}
    </div>
  );
}

export default Checkout;
