import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Wedding category
const bakeryProducts = [
  {
    id: 1,
    name: "Chocolate Croissant",
    image: "https://img.freepik.com/free-photo/side-view-baked-croissant-with-chocolate-wooden-board_140725-10225.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "49/ piece",
  },
  {
    id: 2,
    name: "Blueberry Muffin",
    image: "https://img.freepik.com/free-photo/front-view-view-tasty-cupcake-with-blueberries-mint_23-2148718770.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "29 / piece",
  },
  {
    id: 3,
    name: "Fresh Baguette",
    image: "https://img.freepik.com/free-photo/delicious-baguette-with-seasoning-board_23-2147761383.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "40 / loaf",
  },
  {
    id: 4,
    name: "Cinnamon Roll",
    image: "https://img.freepik.com/premium-photo/sweet-fresh-roll-bun-with-cinnamon-star-anise_154293-379.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "39 / piece",
  },
  {
    id: 5,
    name: "Vanilla Cupcake",
    image: "https://img.freepik.com/free-photo/vanilla-cupcakes-with-cream-caramel-grey-table-background_1220-6295.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "229 / piece",
  },
  {
    id: 6,
    name: "Whole Wheat Bread",
    image: "https://img.freepik.com/premium-photo/close-up-bread-container-against-white-background_1048944-11380024.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "69 / loaf",
  },
  {
    id: 7,
    name: "Doughnut",
    image: "https://img.freepik.com/free-photo/delicious-donuts-with-topping-arrangement_23-2150705319.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "59 / loaf",
  },
  {
    id: 8,
    name: "Cookies",
    image: "https://img.freepik.com/free-photo/delicious-cookies-arrangement_23-2150707201.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "139 / loaf",
  },
  {
    id: 9,
    name: "Turnover",
    image: "https://img.freepik.com/premium-photo/close-up-meat-barbecue-grill_1048944-1703845.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "299/ loaf",
  },
  {
    id: 10,
    name: "Swiss Roll",
    image: "https://img.freepik.com/premium-photo/close-up-roses-table_1048944-8541693.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "199 / loaf",
  },
  {
    id: 11,
    name: "Cheese Cake",
    image: "https://img.freepik.com/free-photo/view-delicious-food-from-around-world_23-2151596568.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "99 / loaf",
  },
  {
    id: 12,
    name: "Pie",
    image: "https://img.freepik.com/free-photo/small-puff-pies-with-vegetables-meat-quiches-cafe-window_169016-21614.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "399/ loaf",
  },
  {
    id: 13,
    name: "Tart",
    image: "https://img.freepik.com/free-photo/front-view-little-cakes-with-cream-red-cranberries-blue-grey-desk_140725-21881.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "499 / loaf",
  },
  {
    id: 14,
    name: "Eclairs",
    image: "https://img.freepik.com/free-photo/bottom-close-view-chocolate-eclairs-rectangle-plate-dark-wooden-table_140725-91454.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "99 / loaf",
  },
  {
    id: 15,
    name: "Macron",
    image: "https://img.freepik.com/free-photo/colorful-macaroons-cupcake-paper-holder-inside-display-cabinet_23-2148028039.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "299/ loaf",
  },
  {
    id: 16,
    name: "Brownie",
    image: "https://img.freepik.com/premium-photo/plate-chocolate-cake-with-strawberry-strawberry_1122950-13065.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "399 / loaf",
  },
  {
    id: 17,
    name: "Pastries",
    image: "https://img.freepik.com/premium-photo/tantalizing-top-view-variety-mouthwatering-pastries-dishes-arranged-artistically_1251668-887.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "99/ loaf",
  },
  {
    id: 18,
    name: "Scone",
    image: "https://img.freepik.com/free-photo/traditional-homemade-english-scones-with-frozen-raspberries-cinnamon-top-view_114579-9417.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "169 / loaf",
  },
  {
    id: 19,
    name: "Danish Pastry",
    image: "https://img.freepik.com/free-photo/cinnamon-raisin-roll_1339-8122.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "79 / loaf",
  },
  {
    id: 20,
    name: "Biscuit",
    image: "https://img.freepik.com/free-photo/side-view-chocolate-cookies-crispy-waffles-dark-background_141793-3572.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "59 / loaf",
  },
];

function BakeryItems() 
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
          document.title = "BakeryItems";
        }, []);
  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="bakery-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/traditional-oktoberfest-set-pretzels-beer-smoked-pork-knuckle-eisbein-with-mustard_164638-17592.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1>Fresh Bakery Items</h1>
        <p>Indulge in our delicious and freshly baked goods every day.</p>
      </div>

      {/* Bakery Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {bakeryProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top bakery-image"
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

export default BakeryItems;

