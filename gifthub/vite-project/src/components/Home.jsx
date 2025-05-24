import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import Category from './Category';
import Contact from './Contact';
import About from './About';
import ClientReviewPage from './ClientReviewPage';
import BrandPage from './Brands';


function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Grocery Heaven";
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png" // 🛒 Replace with your preferred cart icon
          alt="Loading Cart"
          style={{
            width: '80px',
            height: '80px',
            animation: 'spin 2.0s linear infinite',
          }}
        />
        <h5 className="mt-3 text-success"> Loading...</h5>

        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    
    );
  }

  return (
    <>
      <Carousel />
      <Category />
      <BrandPage />
      <About />
      <ClientReviewPage />
      <Contact />
    </>
  );
}

export default Home;
