import React from 'react'
import { Link } from 'react-router-dom';  // Import Link for routing

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-dark text-white">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block fs-3">
            <span>Get connected with us <span className='text-danger'>on social networks:</span></span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="https://www.facebook.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://twitter.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.google.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-google" />
            </a>
            <a href="https://www.instagram.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.linkedin.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://github.com" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        
        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4 fs-5 text-danger">
                  <i className="fas fa-card me-3" />Grocery <span className='text-danger'>Heaven</span>
                </h6>
                <p>
                Welcome to Grocery! Your one-stop grocery store for every occasion. Whether you're preparing for a family gathering, stocking up on daily essentials, or simply looking for fresh ingredients, we have something for everyone!
                </p>
              </div>
              {/* Grid column */}
              
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase text-danger fs-5 fw-bold mb-4">
                  Products
                </h6>
                <p>
  <Link to="/fruits" className="text-reset">Fruits & Vegetables</Link>
</p>
<p>
  <Link to="/dairy" className="text-reset">Dairy & Eggs</Link>
</p>
<p>
  <Link to="/bakery" className="text-reset">Bakery & Bread</Link>
</p>
<p>
  <Link to="/beverages" className="text-reset">Beverages</Link>
</p>
<p>
  <Link to="/snacks" className="text-reset">Snacks & Packaged Foods</Link>
</p>



              </div>
              {/* Grid column */}
              
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold fs-5 text-danger mb-4">
                  Useful Links
                </h6>
                <p>
                  <Link to="/about" className="text-reset">About Us</Link>
                </p>
                <p>
                  <Link to="/privacy" className="text-reset">Privacy Policy</Link>
                </p>
                <p>
                  <Link to="/terms" className="text-reset">Terms &amp; Conditions</Link>
                </p>
                <p>
                  <Link to="/faq" className="text-reset">FAQs</Link>
                </p>
              </div>
              {/* Grid column */}
              
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold text-danger  fs-5 mb-4">Contact Us</h6>
                <p><i className="fas fa-home me-3" /> Jalandhar, NY 10012, US</p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  <a href="mailto:support@foodvilla.com" className="text-reset">support@groceryheaven.com</a>
                </p>
                <p><i className="fas fa-phone me-3" /> +91 9501590483</p>
                <p><i className="fas fa-print me-3" />+91 6284040514</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}
        
        {/* Copyright */}
        <div className="text-center p-4  fs-5 me-5 d-none d-lg-block bg-dark" >
          © 2018 GroceryHeaven | All Rights Reserved | <Link to="/terms" className="text-reset">Terms</Link> | <Link to="/privacy-policy" className="text-reset">Privacy Policy</Link>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    
    </>
  )
}

export default Footer;
