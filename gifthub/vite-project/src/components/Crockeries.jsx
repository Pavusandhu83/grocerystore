import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Crockery category
 const CrockeriesProducts = [
  {
    id: 1,
    name: "Dinner Plate Set",
    image: "https://m.media-amazon.com/images/I/81F6LjyLJrL._AC_UL640_FMwebp_QL65_.jpg",
    price: "799 / set",
  },
  {
    id: 2,
    name: "Ceramic Bowls",
    image: "https://m.media-amazon.com/images/I/81WogZY73hL._AC_UL640_FMwebp_QL65_.jpg",
    price: "599 / set",
  },
  {
    id: 3,
    name: "Glass Tumblers",
    image: "https://m.media-amazon.com/images/I/51vf6IyZVRL._AC_UL640_FMwebp_QL65_.jpg",
    price: "499",
  },
  {
    id: 4,
    name: "Cutlery Set",
    image: "https://m.media-amazon.com/images/I/81ExZfqgrKL._AC_UL640_FMwebp_QL65_.jpg",
    price: "799/ set",
  },
  {
    id: 5,
    name: "Tea Cups & Saucers",
    image: "https://img.freepik.com/premium-photo/macaroons-crockery-table_1048944-12863372.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "1999 / set",
  },
  {
    id: 6,
    name: "Serving Tray",
    image: "https://m.media-amazon.com/images/I/51YEc7eL7EL._AC_UL640_FMwebp_QL65_.jpg",
    price: "599",
  },
  {
    id: 7,
    name: "Dessert plates",
    image: "https://m.media-amazon.com/images/I/81bzBTdmKFL._AC_UL640_FMwebp_QL65_.jpg",
    price: "3999",
  },
  {
    id: 8,
    name: "Baking dishes",
    image: "https://m.media-amazon.com/images/I/71LyUfdGNpL._AC_UL640_FMwebp_QL65_.jpg",
    price: "1999",
  },
  {
    id: 9,
    name: "Gravy boat",
    image: "https://m.media-amazon.com/images/I/71U9-oD93VL._AC_UL640_FMwebp_QL65_.jpg",
    price: "899",
  },
  {
    id: 10,
    name: "Chopstick holders",
    image: "https://m.media-amazon.com/images/I/61+hzsgEfBL._AC_UL640_FMwebp_QL65_.jpg",
    price: "99",
  },
  {
    id: 11,
    name: "Breadbasket",
    image: "https://m.media-amazon.com/images/I/710hzAjAcML._AC_UL640_FMwebp_QL65_.jpg",
    price: "299",
  },
  {
    id:12 ,
    name: "Crepe pans",
    image: "https://m.media-amazon.com/images/I/51FJCoFF-TL._AC_UL640_FMwebp_QL65_.jpg",
    price: "599",
  },
  {
    id: 13,
    name: "Muffin tins",
    image: "https://m.media-amazon.com/images/I/817WKi3cXfL._AC_UL640_FMwebp_QL65_.jpg",
    price: "499",
  },
  {
    id:14 ,
    name: "Fondue set",
    image: "https://m.media-amazon.com/images/I/61uwOO0NjzL._AC_UL640_FMwebp_QL65_.jpg",
    price: "499",
  },
  {
    id: 15,
    name: "Pasta bowls",
    image: "https://m.media-amazon.com/images/I/81yMD0j0FlL._AC_UL640_FMwebp_QL65_.jpg",
    price: "799",
  },
];

function Crockeries()
 {
 const dispatch = useDispatch();
     
    const handleAddToCart = (product) => {
     dispatch(addToCart(product));
     toast.success(`${product.name} added to cart successfully!`, {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
     });
  };
  useEffect(() => {
          document.title = "Crockeries";
        }, []);
  return (
    <div>
      {/* Banner Section */}
      <ToastContainer/>
      <div
        className="crockery-banner"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1617784625140-515e220ba148?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JvY2tlcnl8ZW58MHx8MHx8fDA%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'black',
          padding: '50px 0',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // The opacity layer
        }}
      >
        <h1 className='fw-bold bg-light w-50 mx-auto'>Elegant Crockery Collection</h1>
        <p className='fw-bold bg-light w-50 mx-auto'>Upgrade your dining experience with our premium crockery selection.</p>
      </div>

      {/* Crockery Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {CrockeriesProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top crockery-image"
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

export default Crockeries;
