import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Household Essentials category
const HouseholdProducts = [
  {
    id: 1,
    name: "Towels",
    image: "https://img.freepik.com/free-photo/towel_74190-2623.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "499 / pack",
  },
  {
    id: 2,
    name: "Hangers",
    image: "https://img.freepik.com/free-photo/black-clothes-hangers-rack-clothing-store-close-up-selective-focus-fashion-clearance-sale-store-blog-banner_166373-1760.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "199 / pack",
  },
  {
    id: 3,
    name: "Plunger",
    image: "https://m.media-amazon.com/images/I/510izRlbdLL._AC_UL640_FMwebp_QL65_.jpg",
    price: "299 / bottle",
  },
  {
    id: 4,
    name: "Shower Curtain",
    image: "https://img.freepik.com/premium-photo/blank-black-closed-shower-curtain-mockup-halfturned-view_87790-2910.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "999 / bottle",
  },
  {
    id: 5,
    name: "Bedsheets",
    image: "https://img.freepik.com/premium-photo/bed-with-floral-bedspread-flowered-comforter_1041545-12918.jpg?w=2000",
    price: "1999 / roll",
  },
  {
    id: 6,
    name: "Pillows",
    image: "https://img.freepik.com/premium-photo/many-pillow-white-bed_46370-700.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "999 / bottle",
  },
  {
    id: 7,
    name: "Blankets",
    image: "https://img.freepik.com/premium-photo/adjustable-heated-blankets-cozy-nights-optimal-comfort_1006547-12097.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "6999 / bottle",
  },
  {
    id: 8,
    name: "First Aid Kit",
    image: "https://img.freepik.com/premium-photo/medical-first-aid-kit-with-medicine-pills-isolated-gray-background-red-bag-with-medical-equipment-medications-emergency_215580-122.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "499 / bottle",
  },
  {
    id: 9,
    name: "Flash Lights&Batteries",
    image: "https://m.media-amazon.com/images/I/613Uo9eu1QL._AC_UL640_FMwebp_QL65_.jpg",
    price: "149 / bottle",
  },
  {
    id: 10,
    name: "Light Bulb",
    image: "https://img.freepik.com/free-photo/vintage-retro-light-dark-bed-room_1258-321.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "79 / bottle",
  },
  {
    id: 11,
    name: "Basic Tool Kit",
    image: "https://img.freepik.com/premium-photo/directly-shot-toolbox-table_1048944-17580403.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "999 / bottle",
  },
  {
    id: 12,
    name: "Fire Extinguisher",
    image: "https://img.freepik.com/premium-photo/engineers-hand-are-squeezing-handle-fire-extinguisher_101448-422.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "799 / bottle",
  },
  {
    id: 13,
    name: "Extension Cord&Power Strip",
    image: "https://img.freepik.com/premium-photo/set-electricity-yellow-plastic-pot_168171-35.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "1499 / bottle",
  },
  {
    id: 14,
    name: "Can Opener",
    image: "https://img.freepik.com/premium-photo/close-up-work-tool-against-white-background_1048944-21006699.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "29 / bottle",
  },
  {
    id: 15,
    name: "Cooking Utensils",
    image: "https://img.freepik.com/premium-photo/composition-with-different-kitchen-cutlery-round-cutting-board_185193-17823.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "199/ bottle",
  },
  

];

function HouseholdEssentials() 
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
          document.title = "Household essential";
        }, []);
  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="household-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/kitchen-utensils-red-background-copy-space_14117-665327.jpg?w=2000')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'black',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1 class='text-info fw-bold'>Household Essentials</h1>
        <p class='light fw-bold fs-5'>Everything you need to keep your home clean and organized.</p>
      </div>

      {/* Household Essentials Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {HouseholdProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top household-image"
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

export default HouseholdEssentials;
