import React, { useState, useEffect } from "react";

const Reports = () => {
  const [orders, setOrders] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [popularProducts, setPopularProducts] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState({ cod: 0, card: 0 });

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
    calculateReports(savedOrders);
  }, []);

  const calculateReports = () => {
    if (!Array.isArray(orders)) return;  // Prevents the error

    let totalSales = 0;
    let totalOrders = orders.length;
    let productSales = {};
    let paymentMethods = { cod: 0, card: 0 };

    orders.forEach(order => {
        totalSales += order.totalAmount;
        paymentMethods[order.paymentMethod] = (paymentMethods[order.paymentMethod] || 0) + 1;

        order.items.forEach(item => {
            productSales[item.name] = (productSales[item.name] || 0) + item.quantity;
        });
    });

    // Set the calculated values in state or display them
};
useEffect(() => {
          document.title = "Reports";
        }, []);

  return (
    <div className="container mt-4">
      <h2>Reports</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Sales</h5>
              <p className="card-text">Rs. {totalSales.toFixed(2)}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text">{totalOrders}</p>
            </div>
          </div>
        </div>
      </div>

      <h3>Top-Selling Products</h3>
      <ul className="list-group mb-3">
        {popularProducts.map(([name, qty], index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {name}
            <span className="badge bg-primary rounded-pill">{qty}</span>
          </li>
        ))}
      </ul>

      <h3>Payment Method Breakdown</h3>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Cash on Delivery
          <span className="badge bg-warning rounded-pill">{paymentMethods.cod}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Credit Card
          <span className="badge bg-info rounded-pill">{paymentMethods.card}</span>
        </li>
      </ul>
    </div>
  );
};

export default Reports;
