import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/signup', form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
