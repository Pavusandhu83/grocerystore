import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
const CreamsLotionsProducts = [
  {
    id: 1,
    name: "Moisturizing Cream",
    image: "https://img.freepik.com/free-vector/cosmetics-products-realistic-advertisement-poster_1284-18212.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_hybrid",
    price: "1399 / jar",
  },
  {
    id: 2,
    name: "Body Lotion",
    image: "https://img.freepik.com/free-vector/concept-poster-organic-natural-cream_88138-48.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_hybrid",
    price: "799 / bottle",
  },
  {
    id: 3,
    name: "Face Cream",
    image: "https://m.media-amazon.com/images/I/51zxqYt3VdL._AC_UL640_FMwebp_QL65_.jpg",
    price: "569 / jar",
  },
  {
    id: 4,
    name: "Hand Cream",
    image: "https://m.media-amazon.com/images/I/51ogHQc5alL._AC_UL640_FMwebp_QL65_.jpg",
    price: "389 / tube",
  },
  {
    id: 5,
    name: "Sunscreen Lotion",
    image: "https://img.freepik.com/free-vector/realistic-sunscreen-product-promo_52683-62422.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_hybrid",
    price: "299 / bottle",
  },
  {
    id: 6,
    name: "Night Cream",
    image: "https://img.freepik.com/free-vector/night-moisturizing-cream-branded-blue-glass-jar_33099-1075.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_hybrid",
    price: "899 / jar",
  },
  {
    id: 7,
    name: "Sun Scoop",
    image: "https://m.media-amazon.com/images/I/51gY5XiWPHL._AC_UL640_FMwebp_QL65_.jpg",
    price: "879",
  },
  {
    id: 8,
    name: "Lotus Sunscream",
    image: "https://m.media-amazon.com/images/I/61JVArvRcmL._AC_UL640_FMwebp_QL65_.jpg",
    price: "679",
  },
  {
    id: 9,
    name: "Watermelon Cooling Sunscream",
    image: "https://m.media-amazon.com/images/I/61eUUcx27OL._AC_UL640_FMwebp_QL65_.jpg",
    price: "389",
  },
  {
    id: 10,
    name: "OG Body Lotion",
    image: "https://m.media-amazon.com/images/I/61OT1lWFEpL._AC_UL640_FMwebp_QL65_.jpg",
    price: "380",
  },
  {
    id: 11,
    name: "Lakme Sunkit",
    image: "https://m.media-amazon.com/images/I/41CCWGz5eHL._AC_UL640_FMwebp_QL65_.jpg",
    price: "379",
  },
  {
    id: 12,
    name: "Beauty Of Joseon",
    image: "https://m.media-amazon.com/images/I/41ZNRwLuTRL._AC_UL640_FMwebp_QL65_.jpg",
    price: "299",
  },
  {
    id: 13,
    name: "Minimalist Sunscream",
    image: "https://m.media-amazon.com/images/I/51cCwXqjofL._AC_UL640_FMwebp_QL65_.jpg",
    price: "189",
  },
];

function CreamsLotions()
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
          document.title = "CreamsLotions";
        }, []);

  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="creams-lotions-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/collection-personal-care-productss-grey-background-3d-illustration_771335-30573.jpg?w=1480')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1>Creams & Lotions</h1>
        <p>Keep your skin hydrated, smooth, and protected with our premium skincare collection.</p>
      </div>

      {/* Creams & Lotions Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {CreamsLotionsProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top skincare-image"
                  alt={product.name}
                  style={{ height: '250px', objectFit: 'contain' }}
                />
                <div className="card-body text-center ">
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

export default CreamsLotions;
