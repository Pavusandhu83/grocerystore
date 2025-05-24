import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Ready-to-Cook category
const ReadyToCookProducts = [
  {
    id: 1,
    name: "Frozen Pizza",
    image: "https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "199/ pack",
  },
  {
    id: 2,
    name: "Instant Noodles",
    image: "https://img.freepik.com/premium-photo/schezwan-veg-noodles-is-spicy-tasty-stir-fried-flat-hakka-noodles-with-sauce-veggies_466689-47472.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "99/ pack",
  },
  {
    id: 3,
    name: "Marinated Chicken",
    image: "https://img.freepik.com/premium-photo/raw-marinated-chicken-breast-dark-surface-with-spices-ready-cook_1220-6076.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "299 / pack",
  },
  {
    id: 4,
    name: "Veggie Stir-Fry Mix",
    image: "https://img.freepik.com/free-photo/stir-fry-chicken-sweet-peppers-green-beans_2829-20110.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "299/ bag",
  },
  {
    id: 5,
    name: "Frozen French Fries",
    image: "https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "199/ bag",
  },
  {
    id: 6,
    name: "Pasta Sauce",
    image: "https://m.media-amazon.com/images/I/61ip5FTFI8L._AC_UL640_FMwebp_QL65_.jpg",
    price: "199 / jar",
  },
  {
    id: 7,
    name: "Canned soup",
    image: "https://m.media-amazon.com/images/I/61LYQ8FgTwS._AC_UL640_FMwebp_QL65_.jpg",
    price: "99",
  },
  {
    id: 8,
    name: "Wraps and sandwiches",
    image: "https://img.freepik.com/free-photo/side-view-chicken-roll-grilled-chicken-fillet-with-lettuce-greens-mayo-wrapped-tortilla-club-sandwich-table_141793-4848.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "89",
  },
  {
    id: 9,
    name: "Granola bars",
    image: "https://img.freepik.com/premium-photo/tray-with-granola-bars-bowl-with-almond-white-wooden-background_185193-19062.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "99",
  },
  {
    id: 10,
    name: "Rice bowls",
    image: "https://img.freepik.com/premium-photo/schezwan-fried-rice-masala-is-popular-indo-chinese-food-served-plate-bowl-with-chopsticks_466689-47069.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "99",
  },
  {
    id: 11,
    name: "Snackable fruit cups",
    image: "https://img.freepik.com/premium-photo/south-indian-lots-mix-fruit-chaat-stall-full-fresh-healthy-red-watermelon-pineapple_1048944-21418047.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "199",
  },
  {
    id:12 ,
    name: "Cheese sticks or slices",
    image: "https://img.freepik.com/free-photo/front-view-tasty-pancakes-blue-surface_179666-44204.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "69",
  },
  {
    id: 13,
    name: "Pasta salads",
    image: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "150",
  },
  {
    id:14 ,
    name: "Popcorn",
    image: "https://img.freepik.com/free-photo/front-view-fresh-popcorn-with-raw-corns-pink-table-corn-movie-cinema-color_140725-72930.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "59",
  },
  {
    id: 15,
    name: "Instant curry meals",
    image: "https://img.freepik.com/premium-photo/thai-yellow-curry-with-chicken-rice_165536-4695.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "234",
  },
];

function ReadyToCook() 
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
    document.title = "Ready to Cook";
  }, []);
  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="ready-to-cook-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/assortment-plant-based-meat-food-reduce-carbon-footprint-view-from_1048944-1996424.jpg?w=1480')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'black',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1>Ready-to-Cook Essentials</h1>
        <p>Delicious meals made easy—quick, convenient, and tasty!</p>
      </div>

      {/* Ready-to-Cook Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {ReadyToCookProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top ready-to-cook-image"
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

export default ReadyToCook;
