import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Sweets category
const beveragesProducts = [
  {
    id: 1,
    name: "Fresh Orange Juice",
    image: "https://img.freepik.com/free-photo/sliced-oranges-with-juice-glass-jar-cup_114579-11763.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "49",
  },
  {
    id: 2,
    name: "Iced Coffee",
    image: "https://img.freepik.com/free-photo/aromatic-frappuccino-table_23-2148900668.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "49",
  },
  {
    id: 3,
    name: "Green Tea",
    image: "https://img.freepik.com/free-photo/glass-green-tea_23-2148170701.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "39",
  },
  {
    id: 4,
    name: "Smoothie Mix",
    image: "https://img.freepik.com/free-photo/assortment-milkshake-glasses-with-fruits-chocolate_23-2148707756.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "149",
  },
  {
    id: 5,
    name: "Soft Drinks",
    image: "https://img.freepik.com/premium-photo/colorful-tropical-drinks_1048944-13341680.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "159",
  },
  {
    id: 6,
    name: "Energy Drink",
    image: "https://img.freepik.com/premium-photo/energy-drink-ad-with-lightning-effects_1029473-746455.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "299",
  },
  {
    id: 7,
    name: "Hot Chocolate",
    image: "https://img.freepik.com/premium-photo/cup-hot-chocolate-with-marshmallows-biscuits_165623-2494.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "99",
  },
  {
    id: 8,
    name: "Milk Shake",
    image: "https://img.freepik.com/free-photo/four-different-cocktail-smoothies-with-milky-cream-top_114579-1097.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "99",
  },
  {
    id: 9,
    name: "Beer",
    image: "https://img.freepik.com/free-photo/composition-with-delicious-american-beer_23-2148907625.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "499",
  },
  {
    id: 10,
    name: "Whisky",
    image: "https://img.freepik.com/free-vector/brandy-cognac-whiskey-glass-bottles-illustration_1284-57748.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "899",
  },
  {
    id: 11,
    name: "Rum",
    image: "data:image/jpeg;base64,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",
    price: "999",
  },
  {
    id: 12,
    name: "Mojito",
    image: "https://img.freepik.com/free-photo/cocktail-ice-mint-leaf-culinary-drink-mojito-lime-alcohol-freshness-generated-by-artificial-intelligence_188544-110589.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "799",
  },
  {
    id: 13,
    name: "Lemonade",
    image: "https://img.freepik.com/premium-photo/glass-with-lemonade-lemons-wooden-surface-fresh-drink_185193-13250.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "789",
  },
  {
    id: 14,
    name: "Coconut Water",
    image: "https://img.freepik.com/premium-photo/fresh-organic-coconut-water-glass-wooden-table_43284-1261.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "49",
  },
  {
    id: 15,
    name: "Wine",
    image: "https://img.freepik.com/premium-photo/bottle-wine-with-cheese-olives_796884-3.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "1999",
  },
  {
    id: 16,
    name: "Champange",
    image: "https://img.freepik.com/premium-photo/ai-generated-illustration-two-glasses-champange-dark-background_441362-7228.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "299",
  },
  {
    id: 17,
    name: "Vodka",
    image: "https://img.freepik.com/premium-photo/barman-pouring-hard-spirit-into-small-glasses_124865-2443.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "499",
  },
  {
    id: 18,
    name: "Tequila",
    image: "https://img.freepik.com/premium-photo/bottle-glasses-vodka-with-lime-black-background_144356-24705.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "299",
  },
  {
    id: 19,
    name: "Cocktail",
    image: "https://media.istockphoto.com/id/1302161390/photo/two-cocktails-at-sunset.jpg?b=1&s=612x612&w=0&k=20&c=jcxe6SBDfG1RKy6bof0ZhRiNSzukzKW1J81Gi-3DK14=",
    price: "599",
  },
  {
    id: 20,
    name: "Coffee",
    image: "https://img.freepik.com/premium-photo/white-coffee-cup-with-chamomile-grey-background_112304-1321.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "39",
  },

];

function Beverages()
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
          document.title = "Beverages";
        }, []);
  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="beverages-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/green-plant-glass-water_713562-10357.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_keywords_boost')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1>Refreshing Beverages</h1>
        <p>Stay refreshed with our wide selection of beverages.</p>
      </div>

      {/* Beverages Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {beveragesProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top beverage-image"
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

export default Beverages;



