import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Baby Care category
const BabyCareProducts = [
  {
    id: 1,
    name: "Baby Shampoo",
    image: "https://m.media-amazon.com/images/I/51hfXoBzYIL._AC_UL640_FMwebp_QL65_.jpg",
    price: "1299 / bottle",
  },
  {
    id: 2,
    name: "Baby Wipes",
    image: "https://m.media-amazon.com/images/I/71AGHg6QUoL._AC_UL640_FMwebp_QL65_.jpg",
    price: "1599 / pack",
  },
  {
    id: 3,
    name: "Diapers",
    image: "https://m.media-amazon.com/images/I/61wZULNHInL._AC_UL640_FMwebp_QL65_.jpg",
    price: "1380 / pack",
  },
  {
    id: 4,
    name: "Baby Lotion",
    image: "https://m.media-amazon.com/images/I/51EpizmKUJL._AC_UL640_FMwebp_QL65_.jpg",
    price: "789 / bottle",
  },
  {
    id: 5,
    name: "Baby Powder",
    image: "https://m.media-amazon.com/images/I/81fn0Ug-5HL._AC_UL640_FMwebp_QL65_.jpg",
    price: "435 / bottle",
  },
  {
    id: 6,
    name: "Pacifiers",
    image: "https://m.media-amazon.com/images/I/61DCx1oGF3L._AC_UL640_FMwebp_QL65_.jpg",
    price: "678 / set",
  },
  {
    id: 7,
    name: "Car Seat",
    image: "https://m.media-amazon.com/images/I/61qOxV2BcrL._AC_UL640_FMwebp_QL65_.jpg",
    price: "18999",
  },
  {
    id: 8,
    name: "Stroller",
    image: "https://m.media-amazon.com/images/I/81dKyUhAXVL._AC_UL640_FMwebp_QL65_.jpg",
    price: "14999",
  },
  {
    id: 9,
    name: "Baby Bathtub",
    image: "https://m.media-amazon.com/images/I/61yV85zwZeL._AC_UL640_FMwebp_QL65_.jpg",
    price: "4999",
  },
  {
    id: 10,
    name: "Baby Soap",
    image: "https://m.media-amazon.com/images/I/71+xZeu8VVL._AC_UL640_FMwebp_QL65_.jpg",
    price: "899",
  },
  {
    id: 11,
    name: "Baby Nail Clipper",
    image: "https://m.media-amazon.com/images/I/61SqjmaPxuL._AC_UL640_FMwebp_QL65_.jpg",
    price: "299",
  },
  {
    id: 12,
    name: "Diaper Rash Cream",
    image: "https://m.media-amazon.com/images/I/71pnECXQSfL._AC_UL640_FMwebp_QL65_.jpg",
    price: "879",
  },
  {
    id: 13,
    name: "Bath Towels (soft and absorbent)",
    image: "https://m.media-amazon.com/images/I/81jIFvnPcNL._AC_UL640_FMwebp_QL65_.jpg",
    price: "999",
  },
  {
    id: 14,
    name: "Nasal Aspirator",
    image: "https://m.media-amazon.com/images/I/61pYcpQIpfL._AC_UL640_FMwebp_QL65_.jpg",
    price: "129",
  },
  {
    id: 15,
    name: "Bottles (and nipples)",
    image: "https://m.media-amazon.com/images/I/61p5uCcBJSL._AC_UL640_FMwebp_QL65_.jpg",
    price: "900",
  },
  
];

function BabyCare()
 {
    const dispatch = useDispatch();
        
       const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success(`${product.name} added to cart successfully!`, {
          position: "top-right",
          autoClose: 100,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        
    };

     useEffect(() => {
        document.title = "Baby Care";
      }, []);
  return (
    <div>
      {/* Banner Section */}
      <div
        className="baby-care-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/yellow-personal-hygiene-items-copy-space_23-2148439109.jpg?t=st=1742528741~exp=1742532341~hmac=4e724de9011abb81119d4f371d8c091f0335ab315f032e5aa2251675ab066f00&w=2000')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1>Baby Care Essentials</h1>
        <p>Gentle and safe products to keep your baby happy and healthy.</p>
      </div>

      {/* Baby Care Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {BabyCareProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top babycare-image"
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

export default BabyCare;
