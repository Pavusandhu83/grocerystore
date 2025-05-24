import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PAYMENT_METHODS = {
  all: "All Payments",
  cod: "Cash on Delivery",
  card: "Credit Card",
};

const ORDER_STATUSES = {
  PROCESSING: "Processing",
  DELIVERED: "Delivered",
  PENDING: "Pending",
};

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.title = "Admin";
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders.reverse());
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify([...orders].reverse()));
  }, [orders]);

  const updateOrderStatus = (id, status) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const deleteOrder = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    }
  };

  const filteredOrders = orders.filter((order) => {
    if (!order.userDetails || !order.userDetails.name || !order.userDetails.email) {
      return false;
    }
    const matchesFilter = filter === "all" || order.paymentMethod === filter;
    const searchLower = search.toLowerCase();
    const matchesSearch =
      order.userDetails.name.toLowerCase().includes(searchLower) ||
      order.userDetails.email.toLowerCase().includes(searchLower);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h1 className="h3">Admin Dashboard</h1>
        <nav className="mt-2 mt-sm-0">
          <Link to="/admin/products" className="btn btn-primary me-2 mb-2 mb-sm-0">Manage Products</Link>
          <Link to="/admin/users" className="btn btn-success me-2 mb-2 mb-sm-0">Manage Users</Link>
          <Link to="/admin/reports" className="btn btn-warning">Reports</Link>
        </nav>
      </div>

      <div className="d-flex gap-3 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by name or email"
          className="form-control flex-grow-1"
          style={{ minWidth: "250px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="form-select"
          style={{ maxWidth: "200px" }}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {Object.entries(PAYMENT_METHODS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <h2 className="h5 mb-3">Orders ({filteredOrders.length})</h2>

      {filteredOrders.length === 0 ? (
        <p className="text-center text-muted">No orders found.</p>
      ) : (
        <div className="row g-3">
          {filteredOrders.map((order) => (
            <div key={order.id} className="col-12 col-md-6 col-lg-4">
              <OrderCard
                order={order}
                onUpdateStatus={updateOrderStatus}
                onDelete={deleteOrder}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const OrderCard = ({ order, onUpdateStatus, onDelete }) => {
  const { userDetails, status, paymentMethod, orderDate, totalAmount, id } = order;

  const badgeClass =
    status === ORDER_STATUSES.DELIVERED
      ? "success"
      : status === ORDER_STATUSES.PROCESSING
      ? "info"
      : "secondary";

  return (
    <div
    className="rounded p-3 h-100 d-flex flex-column"
    style={{ border: "3px solid black" }}
  >
  
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="mb-0">{userDetails.name}</h5>
        <span className={`badge bg-${badgeClass}`}>{status}</span>
      </div>
      <p className="mb-1"><strong>Email:</strong> {userDetails.email}</p>
      <p className="mb-1"><strong>Address:</strong> {userDetails.address || "N/A"}</p>
      <p className="mb-1"><strong>Payment:</strong> {paymentMethod.toUpperCase()}</p>
      <p className="mb-1"><strong>Date:</strong> {new Date(orderDate).toLocaleString()}</p>
      <p className="mb-3"><strong>Total:</strong> Rs. {totalAmount.toFixed(2)}</p>

      <div className="mt-auto d-flex gap-2 flex-wrap">
        <button
          onClick={() => onUpdateStatus(id, ORDER_STATUSES.PROCESSING)}
          className="btn btn-info btn-sm flex-grow-1"
          disabled={status === ORDER_STATUSES.PROCESSING}
          title="Mark order as Processing"
        >
          Processing
        </button>
        <button
          onClick={() => onUpdateStatus(id, ORDER_STATUSES.DELIVERED)}
          className="btn btn-success btn-sm flex-grow-1"
          disabled={status === ORDER_STATUSES.DELIVERED}
          title="Mark order as Delivered"
        >
          Delivered
        </button>
        <button
          onClick={() => onDelete(id)}
          className="btn btn-danger btn-sm flex-grow-1"
          title="Delete this order"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
