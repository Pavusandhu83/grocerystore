import React from 'react';
import { FaTruck, FaRegCreditCard, FaHeadset, FaAppleAlt, FaShoppingBasket,FaTags  } from 'react-icons/fa'; // Importing React Icons
import { useEffect } from 'react';
// Service data array
const services = [
  {
    id: 1,
    icon: <FaTruck size={50} color="#27ae60" />, // Green color for grocery theme
    title: "Fast Delivery",
    description: "Get your groceries delivered fresh and on time, right at your doorstep.",
  },
  {
    id: 2,
    icon: <FaRegCreditCard size={50} color="#27ae60" />,
    title: "Secure Online Payment",
    description: "Pay easily through secure online payment options for your convenience.",
  },
  {
    id: 3,
    icon: <FaHeadset size={50} color="#27ae60" />,
    title: "24/7 Customer Support",
    description: "Our support team is available 24/7 to help you with your orders or inquiries.",
  },
  {
    id: 4,
    icon: <FaAppleAlt size={50} color="#27ae60" />,
    title: "Fresh Organic Produce",
    description: "We offer a wide variety of fresh and organic groceries for a healthy lifestyle.",
  },
  {
    id: 5,
    icon: <FaShoppingBasket size={50} color="#27ae60" />,
    title: "Wide Product Range",
    description: "From fresh fruits to household essentials, we have everything you need.",
  },
  {
    id: 6,
    icon: <FaTags size={50} color="#27ae60" />, // FaTags represents discounts or affordability
    title: "Affordable Prices",
    description: "Get the best deals on groceries without compromising on quality.",
  },
];  


function Services() {
  useEffect(() => {
    document.title = "Services";
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <div
        className="services-banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'black',
          padding: '60px 0',
          textAlign: 'center',
          backgroundImage: "url('https://img.freepik.com/free-photo/close-up-hand-paying-with-phone_23-2149160648.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_hybrid')",
          height: '250px',
        }}
      >
<h1 className='fw-bold bg-light w-50 mx-auto'>Our Services</h1>
<p className='fw-bold bg-light w-50 mx-auto'>"Enhance your shopping experience with our premium grocery selection."</p>
      </div>

      {/* Services Section */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* Mapping over services array to create each card */}
          {services.map((service) => (
            <div key={service.id} className="col">
              <div className="card shadow-sm border-light text-center">
                <div className="card-body">
                  {service.icon}
                  <h5 className="card-title mt-3">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="container my-5 text-center">
        <h2 className="mb-4">Get in Touch with Us</h2>
        <p>Have any questions or need assistance? Reach out to us today!</p>
        <a href="tel:+1234567890" className="btn btn-primary mx-2">
          Call Us
        </a>
        <a href="mailto:info@grocerystore.com" className="btn btn-secondary mx-2">
          Email Us
        </a>
      </div>
    </div>
  );
}

export default Services;