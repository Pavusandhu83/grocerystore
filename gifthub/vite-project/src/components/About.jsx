import React from 'react';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = "About Us - Fresh Market";
  }, []);
  return (
    <>
      <div>
        {/* About Us Section */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="display-4 mb-4 text-black fw-bold  title ">About Our Grocery Store</h2>
                <p className="diplay-4 lead title">Welcome to Fresh Market, your go-to destination for high-quality groceries, fresh produce, and everyday essentials. Whether you're stocking up for the week or looking for specialty items, we've got everything you need.</p>
                <p className="lead title  ">Founded in 2010, Fresh Market has been serving the community with fresh, locally sourced produce and groceries. We believe that healthy living starts with quality food, and we’re here to make it accessible for everyone.</p>
              </div>
              <div className="col-lg-6">
                <img src="https://wembleypark.com/media/images/The_Grocery_Store_in_Wembley_Park.2e16d0ba.fill-1200x630.jpg" alt="Fresh Market Grocery Store" className="img-fluid rounded" />
              </div>
            </div>
          </div>
        </section>

        {/* Service Start */}
        <div className="container-xxl py-6 my-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="row img-twice position-relative h-100">
                  <div className="col-6">
                    <img className="img-fluid rounded" src="https://www.petesfresh.com/sites/default/files/departments/Produce-Depto.jpg" alt />
                    <img className="img-fluid rounded" src="https://eu-images.contentstack.com/v3/assets/blt58a1f8f560a1ab0e/blt3af9e34d3f6a6028/669f0aa15501ed655b85dba1/shutterstock_image_20-_202022-09-26T122910.770.jpg" alt />
                  </div>
                  <div className="col-6 align-self-end">
                    <img className="img-fluid rounded" src="https://www.realsimple.com/thmb/rDm-A_0Lx_nbbc5v41ruuVzTabA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-groceries-GettyImages-1457478968-212cdd6e29844d9aae265b8809e35fd3.jpg" alt />
                    <img className="img-fluid rounded" src="https://www.foodnavigator-usa.com/resizer/v2/W3YAWBYKLBMQFE4DIAGOIGIYDI.jpg?auth=6cc5cb569899f5a679828862c4073e8e0b18cc4025871c904b9a05aa5833b46b" alt />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <h1 className="display-4 mb-4 text-black fw-bold title ">What Do We Offer For You?</h1>
                <p className="mb-5 title ">"We offer a wide range of fresh produce, organic products, dairy, meats, and pantry essentials to make your life easier and healthier."</p>
                <div className="row gy-5 gx-4">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-warning rounded-circle me-3">
                        <i className="fa fa-lemon text-white p-2" />
                      </div>
                      <h5 className="mb-0 title fw-bold fs-3">Fresh Produce</h5>
                    </div>
                    <span className='fs-6'>"Our fresh produce is delivered daily, ensuring that you always get the best fruits and vegetables to nourish your body and elevate your meals."</span>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-warning rounded-circle me-3">
                        <i className="fa fa-leaf text-white p-2" />
                      </div>
                      <h5 className="mb-0 fw-bold title fs-3">Organic Products</h5>
                    </div>
                    <span className='fs-6'>We offer a wide selection of organic groceries, from produce to pantry items, to support healthy and sustainable living.</span>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-warning rounded-circle me-3">
                        <i className="fa fa-shopping-cart text-white p-2" />
                      </div>
                      <h5 className="mb-0 title fw-bold fs-3">Online Ordering</h5>
                    </div>
                    <span className='fs-6'>Our online ordering system allows you to shop for all your grocery needs from the comfort of your home, making grocery shopping easier and more convenient.</span>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                    <div className="d-flex align-items-center mb-3">
                      <div className="flex-shrink-0 btn-square bg-warning rounded-circle me-3">
                        <i className="fa fa-truck text-white p-2" />
                      </div>
                      <h5 className="mb-0 title fs-3 fw-bold">Home Delivery</h5>
                    </div>
                    <span className='fs-6'>Enjoy the convenience of having your groceries delivered right to your doorstep with our fast and reliable home delivery service.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End */}


  
      </div>
    </>
  );
}

export default About;
