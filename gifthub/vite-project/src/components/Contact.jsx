import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      toast.success(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error submitting contact form", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };
  useEffect(() => {
          document.title = "Contact";
        }, []);

  return (
    <div className="container contact-container my-5">
      <div className="row d-flex align-items-stretch">
        
        {/* Contact Form Section */}
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div className="contact-info p-4 border rounded">
            <h1 className="title"><i className="fas fa-envelope"></i> Contact Us</h1>
            <p>Have any questions? Reach out to us!</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" name="message" rows={4} value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-success mt-3">Send Message</button>
            </form>
          </div>
        </div>

        {/* Contact Details & Map Section */}
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div className="contact-info p-4 border rounded">
            <h1 className="title">
              <i className="fas fa-phone-alt"></i> Our Contact Details
            </h1>
            <p>If you prefer, you can contact us using any of the following methods:</p>
            <ul className="list-unstyled">
              <li><i className="fas fa-phone"></i> <strong>Phone:</strong> +1 (234) 567-890</li>
              <li><i className="fas fa-envelope"></i> <strong>Email:</strong> support@groceryheaven.com</li>
              <li><i className="fas fa-map-marker-alt"></i> <strong>Address:</strong> 123 Grocery Lane, Food City, Country</li>
            </ul>
          </div>

          {/* Map Section */}
          <div className="border rounded mt-3">
            <h5 className="p-3"><i className="fas fa-map-marker-alt"></i> Our Location</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872814.9915948592!2d74.40228434687498!3d31.291759900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a435a2288fbed%3A0xc19ecef1f6892493!2sMore%20Supermarket%20-%20Nakodar%20Road%20Jalandhar!5e0!3m2!1sen!2sin!4v1743477991501!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Contact;
