import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'


function Navbar({ onSearch, searchQuery }) {
  // State for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode and apply the class to the body element
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the correct theme class to body when theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    onSearch(query); // Update search query in parent component
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);  // Trigger search on button click, if needed
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid mx-5">
      <Link className="navbar-brand fs-4 fw-bold text-white d-flex align-items-center" to="/">
  <img 
    src="/logo.png" 
    alt="Logo" 
    style={{ width: '40px', height: '40px',  }}
  />
  Grocery Heaven
</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/category">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>

            {/* Search bar */}
            <li className="nav-item d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Search categories..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              
            </li>

            {/* Cart and Login links */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart"><i className="fa-solid fa-cart-shopping" /></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login"><i className="fa-solid fa-user" /></Link>
            </li>

            {/* Dark/Light Mode Toggle Button */}
            <li className="nav-item">
              <button onClick={toggleDarkMode} className="btn btn-outline-light">
                {isDarkMode ? (
                  <i className="fa-solid fa-sun"></i> // Light Mode icon
                ) : (
                  <i className="fa-solid fa-moon"></i> // Dark Mode icon
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
