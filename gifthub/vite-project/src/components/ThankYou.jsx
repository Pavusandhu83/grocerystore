import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 ">
      <div
        className="card shadow-lg p-5 text-center"
        style={{
          maxWidth: '550px',
          width: '100%',
          border: 'none',
          background: 'linear-gradient(to right, #e0f7e9, #ffffff)',
          borderRadius: '15px',
        }}
      >
        <div className="mb-4">
          <div
            className="d-inline-flex justify-content-center align-items-center"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#28a745',
              color: 'white',
              fontSize: '2rem',
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
              animation: 'pop 0.3s ease-out',
            }}
          >
            ✓
          </div>
        </div>
        <h2 className="card-title mb-3 text-success">Thank You for Your Order!</h2>
        <p className="card-text text-muted mb-4">
          Your order has been placed successfully. We’ll contact you shortly with the next steps.
        </p>
        <Link to="/" className="btn btn-success px-4">
          Go to Home
        </Link>
      </div>

      {/* Inline animation keyframes */}
      <style>
        {`
          @keyframes pop {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default ThankYou;
