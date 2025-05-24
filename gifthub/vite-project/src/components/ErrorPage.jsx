import React from 'react'
import { useEffect } from 'react';
function ErrorPage() {
  return (
    <>
    <div>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-6 wow fadeIn" data-wow-delay="0.1s">
    <div className="container text-center pt-5 pb-3">
      <h1 className="display-4 text-white animated slideInDown mb-3 fw-bold">404 Page</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><a className="text-black fw-bold" href="#">Home</a></li>
          <li className="breadcrumb-item"><a className="text-black fw-bold" href="#">Pages</a></li>
          <li className="breadcrumb-item text-primary active fw-bold" aria-current="page ">404 Page</li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* 404 Start */}
  <div className="container-xxl py-6 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <i className="bi bi-exclamation-triangle display-1 text-primary" />
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-illustration-download-in-svg-png-gif-file-formats--404-error-page-pack-network-communication-illustrations-6167023.png?f=webp" alt="" />
          <h1 className="display-1"></h1>
          <h1 className="mb-4"></h1>
          <p className="mb-4"></p>
          <a className="btn btn-warning mb-4 rounded-pill py-3 px-5" href>Go Back To Home</a>
          
        </div>
      </div>
    </div>
  </div>
  {/* 404 End */}
</div>

    
    </>
  )
}
export default ErrorPage