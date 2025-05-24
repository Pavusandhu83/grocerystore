import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Men's Grooming category
const MensGroomingProducts = [
  {
    id: 1,
    name: "Beard Trimmer",
    image: "https://img.freepik.com/free-photo/portrait-happy-smiling-bearded-man-showing-electric-razor_171337-17302.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_hybrid",
    price: "250",
  },
  {
    id: 2,
    name: "Shaving Cream",
    image: "https://m.media-amazon.com/images/I/71lHxEh-OFL._AC_UL640_FMwebp_QL65_.jpg",
    price: "699 / tube",
  },
  {
    id: 3,
    name: "Aftershave Lotion",
    image: "https://m.media-amazon.com/images/I/618l1I+aA5L._AC_UL640_FMwebp_QL65_.jpg",
    price: "999 / bottle",
  },
  {
    id: 4,
    name: "Hair Styling Gel",
    image: "https://m.media-amazon.com/images/I/61nXspkTebL._AC_UL640_FMwebp_QL65_.jpg",
    price: "499 / jar",
  },
  {
    id: 5,
    name: "Face Wash",
    image: "https://m.media-amazon.com/images/I/5182r2veCnL._AC_UL640_FMwebp_QL65_.jpg",
    price: "749 / bottle",
  },
  {
    id: 6,
    name: "Deodorant",
    image: "https://m.media-amazon.com/images/I/617lDU8TkrL._AC_SR292,236_QL70_.jpg",
    price: "569",
  },
  {
    id:7 ,
    name: "Breado Charcoal",
    image: "https://m.media-amazon.com/images/I/71pslo4lp7L._AC_UL640_FMwebp_QL65_.jpg",
    price: "499",
  },
  {
    id: 8,
    name: "Hair Removal Spray",
    image: "https://m.media-amazon.com/images/I/71uS4-tFW0L._AC_UL640_FMwebp_QL65_.jpg",
    price: "899",
  },
  {
    id: 9,
    name: "Manicure Set Nail Clipper",
    image: "https://m.media-amazon.com/images/I/81M6h+FH8ZL._AC_UL640_FMwebp_QL65_.jpg",
    price: "389",
  },
 {
    id:10 ,
    name: "Park Avenue Luxury Grooming Kit",
    image: "https://m.media-amazon.com/images/I/71P+jUefEHL._AC_UL640_FMwebp_QL65_.jpg",
    price: "299",
  },
  {
    id:11 ,
    name: "Pen Styler Razor",
    image: "https://m.media-amazon.com/images/I/71g9scleulL._AC_UL640_FMwebp_QL65_.jpg",
    price: "149",
  },
  {
    id: 12,
    name: "Mini Trimmer",
    image: "https://m.media-amazon.com/images/I/51LuliO6RzS._AC_UL640_FMwebp_QL65_.jpg",
    price: "459",
  },
  
  {
    id:13,
    name: "Scissor For Men for Hair",
    image: "https://m.media-amazon.com/images/I/41OxVVV7IoL._AC_UL640_FMwebp_QL65_.jpg",
    price: "299",
  },
  {
    id:16,
    name: "Hair Serum",
    image: "https://m.media-amazon.com/images/I/71nRo24vVCL._AC_UL640_FMwebp_QL65_.jpg",
    price: "549",
  },
  {
    id:15 ,
    name: "Man Facil Kit",
    image: "https://m.media-amazon.com/images/I/610BrrtNXaL._AC_UL640_FMwebp_QL65_.jpg",
    price: "989",
  },
];

function MensGrooming()  
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
    document.title = "Mens Grooming";
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="mens-grooming-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/close-up-man-selfcare-products_23-2149313021.jpg?ga=GA1.1.1594875237.1742396260')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1>Mens Grooming Essentials</h1>
        <p>Stay sharp and feel fresh with our premium grooming products.</p>
      </div>

      {/* Mens Grooming Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {MensGroomingProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top grooming-image"
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

export default MensGrooming;
