
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

// Example products for the Dairy category
const Products = [
  {
    id: 1,
    name: "Fresh Milk",
    image: "https://m.media-amazon.com/images/I/71RMvWLaMyL._AC_UL640_FMwebp_QL65_.jpg",
    price: "79 / kg",
  },
  {
    id: 2,
    name: "Cheddar Cheese",
    image: "https://m.media-amazon.com/images/I/81+Qfmk8wAL._AC_UL640_FMwebp_QL65_.jpg",
    price: "359 / block",
  },
  {
    id: 3,
    name: "Greek Yogurt",
    image: "https://m.media-amazon.com/images/I/61d25yNKxML._AC_UL640_FMwebp_QL65_.jpg",
    price: "59 / cup",
  },
  {
    id: 4,
    name: "Butter",
    image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/product/opt_6c2e7720-945d-4447-8631-fc9900a1bb9d-shopping.png",
    price: "149 / pack",
  },
  {
    id: 5,
    name: "Whipping Cream Powder",
    image: "https://m.media-amazon.com/images/I/61ivdgO8LuL._AC_UL640_FMwebp_QL65_.jpg",
    price: "249 / bottle",
  },
  {
    id: 6,
    name: "Mozzarella Cheese",
    image: "https://m.media-amazon.com/images/I/51InTRR2QGL._AC_UL640_FMwebp_QL65_.jpg",
    price: "129/ pack",
  },
  {
    id: 7,
    name: "Evaporated Milk",
    image: "https://m.media-amazon.com/images/I/71uG5jcj2kL._AC_UL640_FMwebp_QL65_.jpg",
    price: "59 / pack",
  },
  {
    id: 8,
    name: "Condensed Milk",
    image: "https://m.media-amazon.com/images/I/71CE0VUaGmL._AC_UL640_FMwebp_QL65_.jpg",
    price: "39 / pack",
  },
  {
    id: 9,
    name: "Ricotta Cheese",
    image: "https://m.media-amazon.com/images/I/21yR0TtvaWL._AC_UL450_FMwebp_QL65_.jpg",
    price: "89 / pack",
  },
  {
    id: 10,
    name: "Skimmed Milk",
    image: "https://m.media-amazon.com/images/I/61J0z4i4upL._AC_UL640_FMwebp_QL65_.jpg",
    price: "99/ pack",
  },
  {
    id: 11,
    name: "Kefir",
    image: "https://m.media-amazon.com/images/I/815oAz5N0sL._AC_UL640_FMwebp_QL65_.jpg",
    price: "89 / pack",
  },
  {
    id: 12,
    name: "Panner",
    image: "https://m.media-amazon.com/images/I/717ghPKJX-L._AC_UL640_FMwebp_QL65_.jpg",
    price: "49 / pack",
  },
  {
    id: 13,
    name: "Tofu",
    image: "https://m.media-amazon.com/images/I/71mUaBzkSML._AC_UL640_FMwebp_QL65_.jpg",
    price: "149 / pack",
  },
  {
    id: 14,
    name: "Pure Ghee",
    image: "https://m.media-amazon.com/images/I/61gN5b75e+L._AC_UL640_FMwebp_QL65_.jpg",
    price: "249 / pack",
  },
  {
    id: 15,
    name: "Pure Buttermilk",
    image: "https://m.media-amazon.com/images/I/71L1kwZJ3VL._AC_UL640_FMwebp_QL65_.jpg",
    price: "89 / pack",
  },
  {
    id: 16,
    name: "Whey",
    image: "https://m.media-amazon.com/images/I/71oW6bOYvDL._AC_UL640_FMwebp_QL65_.jpg",
    price: "99 / pack",
  },
  {
    id: 17,
    name: "Sour Cream",
    image: "https://m.media-amazon.com/images/I/514AkfHqP6L._SY300_SX300_QL70_FMwebp_.jpg",
    price: "39 / pack",
  },
  {
    id: 18,
    name: "Swiss Cheese",
    image: "https://m.media-amazon.com/images/I/5149V54lw-L._AC_UL640_FMwebp_QL65_.jpg",
    price: "49 / pack",
  },
  {
    id: 19,
    name: "Powder Milk",
    image: "https://m.media-amazon.com/images/I/71VhDFidEeL._AC_UL640_FMwebp_QL65_.jpg",
    price: "39 / pack",
  },
  {
    id: 20,
    name: "Butter Ice-Cream",
    image: "https://m.media-amazon.com/images/I/71kxbq+s67S._AC_UL640_FMwebp_QL65_.jpg",
    price: "89 / pack",
  },
];

function DairyProducts()
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
               document.title = "Dairy Products";
             }, []);

  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="dairy-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/dairy-products-displayed-pink-background-with-butter-cream-milk-bowls_1062371-55902.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_hybrid')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1 class='fst-bold text-secondary'>Fresh Dairy Products</h1>
        <p class='text-primary'>Enjoy our high-quality, farm-fresh dairy products.</p>
      </div>

      {/* Dairy Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {Products.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top dairy-image"
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

export default DairyProducts;
