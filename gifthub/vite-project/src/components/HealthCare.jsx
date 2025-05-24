import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Health Care category
const HealthCareProducts = [
  {
    id: 1,
    name: "Vitamin C Supplements",
    image: "https://m.media-amazon.com/images/I/615YIWdC6CL._AC_UL640_FMwebp_QL65_.jpg",
    price: "499",
  },
  {
    id: 2,
    name: "Pain Relief Balm",
    image: "https://m.media-amazon.com/images/I/71L1K+dcBLS._AC_UL640_FMwebp_QL65_.jpg",
    price: "789",
  },
  {
    id: 3,
    name: "First Aid Kit",
    image: "https://m.media-amazon.com/images/I/91MDpQfvN2L._AC_UL640_FMwebp_QL65_.jpg",
    price: "349",
  },
  {
    id: 4,
    name: "Hand Sanitizer",
    image: "https://m.media-amazon.com/images/I/71k2AFsF9iL._AC_UL640_FMwebp_QL65_.jpg",
    price: "99",
  },
  {
    id: 5,
    name: "Face Masks",
    image: "https://m.media-amazon.com/images/I/61TseKF5yLL._AC_UL640_FMwebp_QL65_.jpg",
    price: "1199 / pack",
  },
  {
    id: 6,
    name: "Thermometer",
    image: "https://m.media-amazon.com/images/I/51Es+KccjuL._AC_UL640_FMwebp_QL65_.jpg",
    price: "159 / unit",
  },
  {
    id: 7,
    name: "Stethoscope",
    image: "https://img.freepik.com/free-photo/patient-prescription-technology-scientific-help_1232-3542.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "3999",
  },
  {
    id: 8,
    name: "Eye Drops",
    image: "https://m.media-amazon.com/images/I/51rT1cq9HlL._AC_UL640_FMwebp_QL65_.jpg",
    price: "479",
  },
  {
    id: 9,
    name: "Nasal Spray",
    image: "https://m.media-amazon.com/images/I/61+XnFJ-7PL._AC_UL640_FMwebp_QL65_.jpg",
    price: "159",
  },
  {
    id: 10,
    name: "Sleep Mask",
    image: "https://m.media-amazon.com/images/I/61LlC4hNWjL._AC_UL640_FMwebp_QL65_.jpg",
    price: "289",
  },
  {
    id: 11,
    name: "Exercise Resistance Bands",
    image: "https://m.media-amazon.com/images/I/71-87y93B+L._AC_UL640_FMwebp_QL65_.jpg",
    price: "299",
  },
  {
    id: 12,
    name: "Orthopedic Pillow",
    image: "https://m.media-amazon.com/images/I/814LtNj2G7L._AC_UL640_FMwebp_QL65_.jpg",
    price: "1100",
  },
  {
    id: 13,
    name: "Digital Health Tracker",
    image: "https://m.media-amazon.com/images/I/61RP7sa++KL._AC_UY436_FMwebp_QL65_.jpg",
    price: "589",
  },
  {
    id: 14,
    name: "Glucose Meter",
    image: "https://m.media-amazon.com/images/I/61fNrn9KNNL._AC_UL640_FMwebp_QL65_.jpg",
    price: "578",
  },
];

function HealthCare()  
{

  useEffect(() => {
          document.title = "Health Care";
        }, []);
  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="health-care-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/minimalistic-science-banner-with-sample_23-2149431139.jpg?t=st=1742528381~exp=1742531981~hmac=760fdf23024e79913b66d3e50a35fcc78b7052247aeb5f9a166599247f58c3b7&w=1480')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1>Health Care Essentials</h1>
        <p>Stay healthy and protected with our premium health care products.</p>
      </div>

      {/* Health Care Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {HealthCareProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top healthcare-image"
                  alt={product.name}
                  style={{ height: '250px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Rs. {product.price}</p>
                  <button className="btn btn-success" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HealthCare;
