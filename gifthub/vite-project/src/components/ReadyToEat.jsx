import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Ready-to-Eat category
const ReadyToEatProducts = [
  {
    id: 1,
    name: "Sandwich Pack",
    image: "https://img.freepik.com/free-photo/side-view-club-sandwich-with-french-fries-wooden-serving-board_176474-3048.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "99/ pack",
  },
  {
    id: 2,
    name: "Fruit Salad Cup",
    image: "https://img.freepik.com/premium-photo/fruit-salad-cup-light-background_1128603-35176.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "89 / cup",
  },
  {
    id: 3,
    name: "Yogurt Parfait",
    image: "https://img.freepik.com/premium-photo/homemade-raspberry-blueberry-with-yogurt-granola-healthy-food-style_1339-130926.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price:  "299/ cup",
  },
  {
    id: 4,
    name: "Protein Bars",
    image: "https://m.media-amazon.com/images/I/81dzJ2WzW+L._AC_UL640_FMwebp_QL65_.jpg",
    price: "399 / box",
  },
  {
    id: 5,
    name: "Sushi Platter",
    image: "https://img.freepik.com/free-photo/sushi-set-with-various-filling_140725-4037.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "100 / tray",
  },
  {
    id: 6,
    name: "Microwaveable Pasta",
    image: "https://img.freepik.com/premium-photo/italian-cuisine-cooked-pasta-tortiglioni_1472-150204.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "99 / bowl",
  },
  {
    id: 7,
    name: "Frozen burritos",
    image: "https://img.freepik.com/premium-photo/close-up-meal_1048944-11759638.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "139",
  },
  {
    id: 8,
    name: "Deli meats",
    image: "https://img.freepik.com/free-photo/meat-cutting-with-olives-slices-orange_140725-983.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "199",
  },
  {
    id: 9,
    name: "Hummus and veggie packs",
    image: "https://img.freepik.com/premium-photo/hummus-served-as-part-themed-meal-such-as-mediterranean-feast-tapas-spread_198067-266483.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "119",
  },
  {
    id: 10,
    name: "Canned tuna or salmon",
    image: "https://img.freepik.com/free-photo/canned-fish-tin-cans-salmon-tuna-mackerel-sprats_114579-43357.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "129",
  },
  {
    id: 11,
    name: "Cheese quesadillas (frozen)",
    image: "https://img.freepik.com/premium-photo/close-up-baked-chicken-cheese-quesadillas-served-with-salsa-guacamole-stone-plate_43263-1609.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "299",
  },
  {
    id:12 ,
    name: "Chips and salsa",
    image: "https://img.freepik.com/premium-photo/close-up-fruits-bowl-table_1048944-5279120.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "199",
  },
  {
    id: 13,
    name: "Dessert cups (pudding, mousse)",
    image: "https://img.freepik.com/free-photo/close-up-fancy-dessert_23-2150527623.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "89",
  },
  {
    id:14 ,
    name: "Meal replacement shakes",
    image: "https://img.freepik.com/premium-photo/mason-jar-glass-with-tasty-smoothies-wafer-some-ingredients-kitchen-table_392895-245429.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "99",
  },
  {
    id: 15,
    name: "Chili (canned or pre-packaged)",
    image: "https://img.freepik.com/premium-photo/close-up-juice-jar-table_1048944-16433902.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost",
    price: "299",
  },
];

function ReadyToEat() 
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
    document.title = "Ready to Eat";
  }, []);
  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="ready-to-eat-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/healthy-lifestyle-diet-food-background-sport-shoes-dumbell-healthy-food-blue-flat-lay-with-copy-space_1040174-1567.jpg?w=1480')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'black',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1>Ready-to-Eat Essentials</h1>
        <p>Quick and delicious meals—fresh, convenient, and ready anytime!</p>
      </div>

      {/* Ready-to-Eat Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {ReadyToEatProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top ready-to-eat-image"
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

export default ReadyToEat;
