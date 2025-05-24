import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Feminine Care category
const FeminineCareProducts = [
  {
    id: 1,
    name: "Sanitary Pads",
    image: "https://m.media-amazon.com/images/I/710H0hzw9wL._AC_UL640_FMwebp_QL65_.jpg",
    price: "99",
  },
  {
    id: 2,
    name: "Tampons",
    image: "https://m.media-amazon.com/images/I/61tX8NpWtlL._AC_UL640_FMwebp_QL65_.jpg",
    price: "89 / box",
  },
  {
    id: 3,
    name: "Menstrual Cup",
    image: "https://m.media-amazon.com/images/I/61qh+RYMOTL._AC_UL640_FMwebp_QL65_.jpg",
    price: "299",
  },
  {
    id: 4,
    name: "Intimate Wash",
    image: "https://m.media-amazon.com/images/I/6180UQwIgkL._AC_UL640_FMwebp_QL65_.jpg",
    price: "299",
  },
  {
    id: 5,
    name: "Panty Liners",
    image: "https://m.media-amazon.com/images/I/61ro9nFiO3L._AC_UL640_FMwebp_QL65_.jpg",
    price: "199",
  },
  {
    id: 6,
    name: "Heat Patches for Cramps",
    image: "https://m.media-amazon.com/images/I/71pHClCQRXL._AC_UL640_FMwebp_QL65_.jpg",
    price: "199",
  },
  {
    id: 7,
    name: "Period underwear",
    image: "https://m.media-amazon.com/images/I/61l0aBheh7L._AC_UL640_FMwebp_QL65_.jpg",
    price: "300",
  },
  {
    id: 8,
    name: "Intimate wipes",
    image: "https://m.media-amazon.com/images/I/611SLeRn6YL._AC_UL640_FMwebp_QL65_.jpg",
    price: "399",
  },
  {
    id: 9,
    name: "Shaving cream or gel",
    image: "https://m.media-amazon.com/images/I/615E1+Qn8KL._AC_UL640_FMwebp_QL65_.jpg",
    price: "299",
  },
  {
    id: 10,
    name: "Razor",
    image: "https://m.media-amazon.com/images/I/71KpXjkh61L._AC_UL640_FMwebp_QL65_.jpg",
    price: "99",
  },
  {
    id: 11,
    name: "Makeup remover",
    image: "https://m.media-amazon.com/images/I/41yAKxKqv4L._AC_UL640_FMwebp_QL65_.jpg",
    price: "399",
  },
  {
    id:12 ,
    name: "Hair removal cream",
    image: "https://m.media-amazon.com/images/I/61BFEiw9CbL._AC_UL640_FMwebp_QL65_.jpg",
    price: "89",
  },
  {
    id: 13,
    name: "Perfume",
    image: "https://m.media-amazon.com/images/I/71FYgvmvNAL._AC_UL640_FMwebp_QL65_.jpg",
    price: "399",
  },
  {
    id:14 ,
    name: "Foot cream",
    image: "https://m.media-amazon.com/images/I/6182H5j1f3L._AC_UL640_FMwebp_QL65_.jpg",
    price: "129",
  },
  {
    id: 15,
    name: "Feminine hygiene spray",
    image: "https://m.media-amazon.com/images/I/71RULeXyubL._AC_UL640_FMwebp_QL65_.jpg",
    price: "234",
  },
];

function FeminineCare() 
{
  const dispatch = useDispatch();
      
     const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      toast.success(`${product.name} added to cart successfully!`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
  };
  useEffect(() => {
          document.title = "Feminine Care";
        }, []);
  return (
    <div>
      {/* Banner Section */}
      <div
        className="feminine-care-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/horizontal-banner-with-jade-roller-guasha_23-2149446524.jpg?t=st=1742529144~exp=1742532744~hmac=d56234f1f6156e68556e02446a51e99e632441d374f063b22a168c69d04defcd&w=1480')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1>Feminine Care Essentials</h1>
        <p>Comfort, hygiene, and care for every woman’s needs.</p>
      </div>

      {/* Feminine Care Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {FeminineCareProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top feminine-care-image"
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

export default FeminineCare;
