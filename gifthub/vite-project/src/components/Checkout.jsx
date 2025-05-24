import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    paymentMethod: 'cod',
  });

  const totalAmount = cartItems.reduce((total, item) => {
    const price = typeof item.price === 'string'
      ? parseFloat(item.price.replace(/[^0-9.-]+/g, ''))
      : item.price;
    return total + price * item.quantity;
  }, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build the order object
    const order = {
      userDetails: {
        name: formData.name,
        address: formData.address,
        email: formData.email,
      },
      paymentMethod: formData.paymentMethod,
      totalAmount,
      orderDate: new Date(),
      status: "Pending",
      items: cartItems,
    };

    // Get existing orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Add the new order
    const updatedOrders = [...existingOrders, order];

    // Save back to localStorage
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    // Clear cart and redirect
    dispatch(clearCart());
    alert('Order placed successfully!');
    navigate('/thankyou');
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <select
                name="paymentMethod"
                className="form-control"
                value={formData.paymentMethod}
                onChange={handleChange}
              >
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success">Place Order</button>
          </form>
        </div>

        <div className="col-md-6">
          <h4>Order Summary</h4>
          <ul className="list-group mb-3">
            {cartItems.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <img src={item.image} alt={item.name} style={{ height: 100 }} />
                <p>{item.name}</p>
                <span>Rs. {(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h5>Total: Rs. {totalAmount.toFixed(2)}</h5>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
