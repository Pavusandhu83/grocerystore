import React, { useState } from 'react';


// Sample user data for the profile
const userData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (234) 567-890',
  address: '123 Flower St, Blossom City, Country',
};

function ProfilePage() {
  const [user, setUser] = useState(userData);

  // Handle profile update
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Handle profile submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    // Here you would normally update the user info to the backend or local storage.
  };

  return (
    <div className="profile-page my-5">
      <div className="container">
        <h1 className="profile-title text-center my-5">Your Profile</h1>

        {/* Profile Information */}
        <div className="profile-info">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Shipping Address</label>
              <textarea
                id="address"
                name="address"
                value={user.address}
                onChange={handleInputChange}
                className="form-control"
                rows="4"
                placeholder="Enter your shipping address"
              />
            </div>

            <button type="submit" className="btn btn-success mt-4">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
