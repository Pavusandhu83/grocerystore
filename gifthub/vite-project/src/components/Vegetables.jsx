import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Cake category
const VegetablesProducts = [
  {
    id: 1,
    name: "Carrots",
    image: "https://img.freepik.com/free-photo/fresh-orange-carrots-with-green-tops-full-natural-goodness_157027-4236.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "69 / kg",
  },
  {
    id: 2,
    name: "Broccoli",
    image: "https://img.freepik.com/premium-photo/fresh-broccoli-isolated-white-background_454083-185.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "69 / kg",
  },
  {
    id: 3,
    name: "Tomatoes",
    image: "https://img.freepik.com/free-photo/fresh-red-tomatoes_2829-13449.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "99 / kg",
  },
  {
    id: 4,
    name: "Bell Peppers",
    image: "https://img.freepik.com/premium-photo/close-up-red-bell-peppers-against-white-background_1048944-20724624.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "59 / kg",
  },
  {
    id: 5,
    name: "Spinach",
    image: "https://img.freepik.com/premium-photo/close-up-fresh-spinach-isolated_454083-4.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "79 / bunch",
  },
  {
    id: 6,
    name: "Potatoes",
    image: "https://img.freepik.com/free-photo/delicious-potatoes-white-background_1203-1899.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "49 / kg",
  },
  {
    id: 7,
    name: "Cauliflower",
    image: "https://img.freepik.com/premium-photo/cauliflower-isolated-white-background_62856-1438.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "39 / kg",
  },
  {
    id: 8,
    name: "Peas",
    image: "https://img.freepik.com/premium-photo/green-peas-white-background_55883-523.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "89/ kg",
  },
  {
    id: 9,
    name: "Pumpkin",
    image: "https://img.freepik.com/premium-photo/pumpkin_489827-2600.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "119 / kg",
  },
  {
    id: 10,
    name: "Beans",
    image: "https://img.freepik.com/free-photo/red-kidney-beans-black-small-bowl-place-dark-floor_1150-35289.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "69/ kg",
  },
  {
    id: 11,
    name: "Okra",
    image: "https://img.freepik.com/free-photo/variety-fresh-tasty-vegetables-dark-background_1220-4539.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "49/ kg",
  },
  {
    id: 12,
    name: "Sweet potatos",
    image: "https://media.istockphoto.com/id/1403981489/photo/raw-whole-red-sweet-potato-related-to-vegetable-farm-kitchen-cooking-carbohydrate-nutrition.jpg?b=1&s=612x612&w=0&k=20&c=0Z9Hk3-kSfuHtPB4MC1kmLrRpgJxbKIHoYnHX7KWMvA=",
    price: "89 / kg",
  },
  {
    id: 13,
    name: "Garlic",
    image: "https://img.freepik.com/premium-photo/garlic-isolated-white-background_255512-243.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "109/ kg",
  },
  {
    id: 14,
    name: "Ginger",
    image: "https://img.freepik.com/free-photo/fresh-ginger-root-sliced-wooden-table_1150-18399.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "59 / kg",
  },
  {
    id: 15,
    name: "Oninons",
    image: "https://img.freepik.com/free-photo/top-view-basket-full-whole-cut-red-onions-wooden-background-with-copy-space_141793-5894.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "49/ kg",
  },
  {
    id: 16,
    name: "Cabbage",
    image: "https://img.freepik.com/premium-photo/fresh-cabbage-isolated-white_272787-236.jpg?w=1380",
    price: "59 / kg",
  },
  {
    id: 17,
    name: "Radish",
    image: "https://media.istockphoto.com/id/158690297/photo/daikon-radishes-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=8XJJZVT1pea3XCeHWtRlTwMcFtyzfVLteLS4IfOBYH0=",
    price: "59/ kg",
  },
  {
    id: 18,
    name: "Cucumber",
    image: "https://img.freepik.com/premium-photo/cucumber-isolated-white-background_319514-272.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "49 / kg",
  },
  {
    id: 19,
    name: "Snake Groud",
    image: "https://media.istockphoto.com/id/176210010/photo/snake-gourd.jpg?b=1&s=612x612&w=0&k=20&c=TdFl2MzDsKcGdcZ2eQ-zb2lNnJCTvTPiOqyraDJN85o=",
    price: "69 / kg",
  },
  {
    id: 20,
    name: "Mashrooms",
    image: "https://img.freepik.com/premium-photo/bunch-mushrooms-white-isolated_269543-318.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "299 / kg",
  },
];

function Vegetables()
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
              document.title = "Vegetables";
            }, []);
  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="vegetable-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/banner-group-vegetables-minimalistic-modern-harvest-tomatoes-zucchini-squash_1048944-26131042.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_hybrid')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1>Fresh Vegetables</h1>
        <p>Explore our variety of fresh and organic vegetables for your daily needs.</p>
      </div>

      {/* Vegetable Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4 mx-auto">
          {VegetablesProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top vegetable-image"
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

export default Vegetables;

