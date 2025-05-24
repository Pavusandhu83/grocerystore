import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Cleaning Needscategory
const CleaningProducts = [
  {
    id: 1,
    name: "Paper Towels",
    image: "https://img.freepik.com/premium-photo/soft-paper-towels-white-desk-front-view_93675-71450.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "99 / pack",
  },
  {
    id: 2,
    name: "Toilet Paper",
    image: "https://img.freepik.com/premium-photo/toilet-paper-white-surface_162459-244.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "89 / pack",
  },
  {
    id: 3,
    name: "Laundry Detergent",
    image: "https://img.freepik.com/free-vector/realistic-laundry-detergent-ad_1284-54615.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "99 / bottle",
  },
  {
    id: 4,
    name: "Dish Soap",
    image: "https://m.media-amazon.com/images/I/61CwN2uZ9yL._AC_UL640_FMwebp_QL65_.jpg",
    price: "79",
  },
  {
    id: 5,
    name: "Trash Bags",
    image: "https://m.media-amazon.com/images/I/71IB+2LNNBL._AC_UL640_FMwebp_QL65_.jpg",
    price: "99 / roll",
  },
  {
    id: 6,
    name: "Cleaning Spray",
    image: "https://m.media-amazon.com/images/I/71lr26CFLdL._AC_SR292,236_QL70_.jpg",
    price: "89",
  },
  {
    id: 7,
    name: "Broom",
    image: "https://m.media-amazon.com/images/I/61bwzuZGC9L._AC_SR292,236_QL70_.jpg",
    price: "99",
  },
  {
    id: 8,
    name: "Vaccum Cleaner",
    image: "https://m.media-amazon.com/images/I/51G8Yy4BmmL._AC_UY436_FMwebp_QL65_.jpg",
    price: "999 / bottle",
  },
  {
    id: 9,
    name: "Plunger",
    image: "https://m.media-amazon.com/images/I/61kSROKP6eL._AC_UL640_FMwebp_QL65_.jpg",
    price: "89",
  },
  {
    id: 10,
    name: "Sponges",
    image: "https://img.freepik.com/free-photo/close-up-two-scouring-pads_1203-1819.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "59",
  },
  {
    id: 11,
    name: "Spin Mope",
    image: "https://m.media-amazon.com/images/I/71qIHilkbkL._AC_UL640_FMwebp_QL65_.jpg",
    price: "499",
  },
  {
    id: 12,
    name: "All Purpose Cleaner",
    image: "https://m.media-amazon.com/images/I/51ziAjtBR5L._AC_UL640_FMwebp_QL65_.jpg",
    price: "89",
  },
  {
    id: 13,
    name: "Dust Cleaning Brush",
    image: "https://m.media-amazon.com/images/I/61Ht+Bdv7fL._AC_UL640_FMwebp_QL65_.jpg",
    price: "59",
  },
  {
    id: 14,
    name: "Dust Pan& Broom",
    image: "https://m.media-amazon.com/images/I/715sUzfkZHL._AC_UL640_FMwebp_QL65_.jpg",
    price: "99",
  },
  {
    id: 15,
    name: "Mini Mope For kitchen",
    image: "https://m.media-amazon.com/images/I/6149ZEcsSGL._AC_UL640_FMwebp_QL65_.jpg",
    price: "89",
  },
  {
    id: 16,
    name: "Bathroom Brush",
    image: "https://m.media-amazon.com/images/I/61PE9c5n6-L._AC_UL640_FMwebp_QL65_.jpg",
    price: "99/ pair",
  },

];

function CleaningNeeds()  {
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
          document.title = "Cleaning needs";
        }, []);
  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="cleaning-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/christmas-cleaning-christmas-shopping-cleaning-tools-christmas-decorations-santa-hat-top_1048944-10602980.jpg?w=2000')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1 class='text-dark fw-bold'>Cleaning Needs</h1>
        <p class='text-black fs-5'>Everything you need to keep your home clean and organized.</p>
      </div>

      {/* Cleaning Needs Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {CleaningProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top cleaning-image"
                  alt={product.name}
                  style={{ height: '250px', objectFit: 'contain' }}
                />
                <div className="card-body text-center">
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

export default CleaningNeeds;
