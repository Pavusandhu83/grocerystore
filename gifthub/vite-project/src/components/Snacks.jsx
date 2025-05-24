import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Snacks category
const SnacksProducts = [
  {
    id: 1,
    name: "Potato Chips",
    image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/product/opt_803ed609-7756-4343-8829-97c371435484-26441.jpg",
    price: "10 / pack",
  },
  {
    id: 2,
    name: "Nachos",
    image: "https://img.freepik.com/free-photo/mexican-nacho-chips-salsa-dip-bowl_2829-14439.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "30 / pack",
  },
  {
    id: 3,
    name: "Popcorn",
    image: "https://img.freepik.com/premium-photo/close-up-food-bowl-against-white-background_1048944-5967088.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "20 / pack",
  },
  {
    id: 4,
    name: "Chocolate Bar",
    image: "https://m.media-amazon.com/images/I/610XEmZ7jYL._AC_UL640_FMwebp_QL65_.jpg",
    price: "49 each",
  },
  {
    id: 5,
    name: "Cookies",
    image: "https://m.media-amazon.com/images/I/81C2NKTF5BL._AC_UL640_FMwebp_QL65_.jpg",
    price: "39 / box",
  },
  {
    id: 6,
    name: "Energy Bars",
    image: "https://m.media-amazon.com/images/I/81qgLGqu34L._AC_UL640_FMwebp_QL65_.jpg",
    price: "79 / pack",
  },
  {
    id: 7,
    name: "Mixed Nuts",
    image: "https://img.freepik.com/premium-photo/wooden-bowl-with-mixed-nuts-wooden-gray-surface_94046-2390.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "99 / pack",
  },
  {
    id: 8,
    name: "Fruit Slices",
    image: "https://img.freepik.com/premium-photo/close-up-chopped-fruit-against-white-background_1048944-20762745.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "99 / pack",
  },
  {
    id: 9,
    name: "Chia Pudding",
    image: "https://img.freepik.com/premium-photo/glass-with-delicious-chia-pudding-white-table_185193-25377.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "119 / pack",
  },
  {
    id: 10,
    name: "Avocado Toast Bites",
    image: "https://img.freepik.com/free-photo/avocado-open-toast-with-avocado-slices-lemon-flax-seeds-sesame-seeds-black-bread-slices-top-view_2831-797.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "129 / pack",
  },
  {
    id: 11,
    name: "Cheese & Crackers",
    image: "https://img.freepik.com/premium-photo/high-angle-view-fruits-table_1048944-22441962.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "79 / pack",
  },
  {
    id: 12,
    name: "Roasted Chickpeas",
    image: "https://img.freepik.com/premium-photo/spicy-crispy-roasted-fried-chickpeas-futana-with-paprika-selective-focus-tasty-popular-vegetarian-snack-side-dish-chakna-consumed-with-cocktail-drinks_466689-3430.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "79 / pack",
  },
  {
    id: 13,
    name: "Samosas ",
    image: "https://img.freepik.com/premium-photo/samosa-snack-served-with-tomato-ketchup-mint-chutney_466689-55757.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "99 / pack",
  },
  {
    id: 14,
    name: "Tortilla Chips & Salsa ",
    image: "https://img.freepik.com/premium-photo/tortilla-chips-inside-bowl-with-salsa-wooden-table_1048944-14388039.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "79 / pack",
  },
   {
    id: 15,
    name: "Beef Jerky ",
    image: "https://img.freepik.com/free-photo/closeup-sliced-medium-rare-cooked-whale-meat-stake-wooden-table_346278-637.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "399 / pack",
  },
];

function Snacks() 
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
          document.title = "Snacks";
        }, []);
  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="snacks-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/black-background-with-cracker-that-says-crackers_713562-16890.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1>Delicious Snacks</h1>
        <p>Crunchy, tasty, and ready to enjoy!</p>
      </div>

      {/* Snacks Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {SnacksProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top snack-image"
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

export default Snacks;
