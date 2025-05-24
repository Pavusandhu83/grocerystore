// src/components/LoginPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, signupUser, logoutUser } from '../redux/actions/authActions';

import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For signup
  const [isSignup, setIsSignup] = useState(false); // Toggle between Login/Signup
  const dispatch = useDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password))
      .then((response) => {
        toast.success('Logged in successfully!');
      })
      .catch((error) => {
        if (!error.response) {
          // Network error (e.g., no internet or server unreachable)
          toast.error('Network error: Please check your connection.');
        } else {
          toast.error(error.message || 'Login failed!');
        }
      });
  };
  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(name, email, password))
      .then((response) => {
        toast.success('Signed up successfully!');
      })
      .catch((error) => {
        if (!error.response) {
          // Network error
          toast.error('Network error: Please check your connection.');
        } else {
          toast.error(error.message || 'Signup failed!');
        }
      });
  };
  

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h3 className="text-center mb-4 text-dark">{isSignup ? 'Sign Up' : 'Login'}</h3>

            {/* Login Form */}
            {!isSignup && (
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-dark">Login</button>
              </form>
            )}

            {/* Signup Form */}
            {isSignup && (
              <form onSubmit={handleSignupSubmit} className="mt-3">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success">Sign Up</button>
              </form>
            )}

            <p className="mt-3 text-center">
              {isSignup ? "Already have an account? " : "Don't have an account? "}
              <a href="#" onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? 'Login' : 'Sign Up'}
              </a>
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default LoginPage; 