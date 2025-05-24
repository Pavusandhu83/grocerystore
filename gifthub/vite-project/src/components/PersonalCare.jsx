import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Personal Care category
const PersonalCareProducts = [
  {
    id: 1,
    name: "Shampoo",
    image: "https://m.media-amazon.com/images/I/51qH4xfdRBL._AC_UL640_FMwebp_QL65_.jpg",
    price: "799 / bottle",
  },
  {
    id: 2,
    name: "Body Wash",
    image: "https://m.media-amazon.com/images/I/51Nh6ey7HNL._AC_UL640_FMwebp_QL65_.jpg",
    price: "478 / bottle",
  },
  {
    id: 3,
    name: "Toothpaste",
    image: "https://img.freepik.com/free-vector/dental-care-toothpaste-promo_79603-1799.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "788 / tube",
  },
  {
    id: 4,
    name: "Mouthwash",
    image: "https://m.media-amazon.com/images/I/51YuQGAWwWL._AC_UL640_FMwebp_QL65_.jpg",
    price: "345 / bottle",
  },
  {
    id: 5,
    name: "Hand Soap",
    image: "https://m.media-amazon.com/images/I/71tRcR0XIPL._AC_UL640_FMwebp_QL65_.jpg",
    price: "677",
  },
  {
    id: 6,
    name: "Deodorant",
    image: "https://m.media-amazon.com/images/I/6153UvvBxNL._AC_UL640_FMwebp_QL65_.jpg",
    price: "799",
  },
  {
    id:7 ,
    name: "Face cleanser",
    image: "https://m.media-amazon.com/images/I/61fgFgTzV2L._AC_UL640_FMwebp_QL65_.jpg",
    price: "899",
  },
  {
    id: 8,
    name: "Facial toner",
    image: "https://m.media-amazon.com/images/I/41JWG001VML._AC_UL640_FMwebp_QL65_.jpg",
    price: "389",
  },
  {
    id: 9,
    name: "Hair styling products (gel, mousse, etc.)",
    image: "https://m.media-amazon.com/images/I/515Nv2J8ZlL._AC_UL640_FMwebp_QL65_.jpg",
    price: "699",
  },
  {
    id: 10,
    name: "Wallet",
    image: "https://m.media-amazon.com/images/I/718V4+mBwHL._AC_UL640_FMwebp_QL65_.jpg",
    price: "388",
  },
  {
    id: 11,
    name: "Keys",
    image: "https://m.media-amazon.com/images/I/91iK3Q9JfYL._AC_UL640_FMwebp_QL65_.jpg",
    price: "389",
  },
  {
    id:12 ,
    name: "Umbrella",
    image: "https://m.media-amazon.com/images/I/71qm1cj1+6L._AC_UL640_FMwebp_QL65_.jpg",
    price: "499",
  },
  {
    id:13 ,
    name: "Gym clothes or workout gear",
    image: "https://m.media-amazon.com/images/I/41V8dooY5ML._AC_UL640_FMwebp_QL65_.jpg",
    price: "566",
  },
  {
    id:14 ,
    name: "Camera",
    image: "https://m.media-amazon.com/images/I/51gmjKtWUGL._AC_UY436_FMwebp_QL65_.jpg",
    price: "1299",
  },
  {
    id:15 ,
    name: "Water bottle",
    image: "https://m.media-amazon.com/images/I/41OJ5XGDWDL._SX300_SY300_QL70_FMwebp_.jpg",
    price: "159",
  },

];

function PersonalCare() 
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
    document.title = "Personal Care";
  }, []);
  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="personal-care-banner"
        style={{
          backgroundImage: "url('https://www.shutterstock.com/image-photo/natural-osmetics-skin-care-product-260nw-1504986272.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'black',
          padding: '100px 0',
          textAlign: 'center',
        }}
      >
        <h1>Personal Care Essentials</h1>
        <p>Everything you need for daily freshness, hygiene, and self-care.</p>
      </div>

      {/* Personal Care Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {PersonalCareProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top personalcare-image"
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

export default PersonalCare;
