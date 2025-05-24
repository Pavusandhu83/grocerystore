// src/Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items ); // Safeguard against undefined

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const price = typeof item.price === "string"
      ? parseFloat(item.price.replace(/[^0-9.-]+/g, ""))
      : item.price; 
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="container my-5">
      <h2 className="text-center">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <Link to="/" className="btn btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-4 mb-3">
                <div className="card shadow-sm border-light cartcard">
                  <img src={item.image} className="card-img-top cartimg mx-auto mt-3" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: Rs. {item.price}</p>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <button className="btn btn-warning mx-2" onClick={() => handleIncrement(item.id)}>+</button>
                    <button className="btn btn-warning mx-2" onClick={() => handleDecrement(item.id)}>-</button>
                    <button className="btn btn-danger mx-2" onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h4>Total Amount: Rs. {totalAmount.toFixed(2)}</h4>
            <Link to="/checkout" className="btn btn-success mx-2">Go To Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
