// src/Fruits.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Import the FruitsProducts as before...
  
// Example products for the Fruits category
const FruitsProducts = [
  {
    id: 1,
    name: "Fresh Apples",
    image:  "https://img.freepik.com/free-photo/red-fresh-apples-as-background_78492-3922.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_hybrid",
    price: "99 / kg",
  },
  {
    id: 2,
    name: "Bananas",
    image: "https://img.freepik.com/free-photo/ai-generated-image-banana_23-2150683056.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "49/ kg",
  },
  {
    id: 3,
    name: "Oranges",
    image: "https://img.freepik.com/free-photo/horizontal-view-whole-cut-half-fresh-oranges-gray-background_140725-140758.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "99 / kg",
  },
  {
    id: 4,
    name: "Strawberries",
    image: "https://media.istockphoto.com/id/1443197738/photo/strawberries-isolated-strawberry-slice-and-whole-berry-isolate-two-strawberries-on-white.jpg?b=1&s=612x612&w=0&k=20&c=6wEVFP0o1WPWyTd_iAf44BFCdaNmbbEPMgHw9OxBguw=",
    price: "120 / kg",
  },
  {
    id: 5,
    name: "Grapes",
    image: "https://img.freepik.com/premium-photo/ripe-green-purple-grapes-isolated-white_257488-1013.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "150/ kg",
  },
  {
    id: 6,
    name: "Pineapple",
    image: "https://img.freepik.com/premium-photo/full-frame-shot-pineapples-market-stall_1048944-4467115.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid",
    price: "100/each",
  },
  {
    id: 7,
    name: "Papaya",
    image: "https://media.istockphoto.com/id/864053288/photo/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=BZ_3wv2NbbukRE_Po32LDwTk5OO0iAnUChU3cLdPAkE=",
    price: "70/ kg",
  },
  {
    id: 8,
    name: "Plum",
    image: "https://media.istockphoto.com/id/157682002/photo/two-whole-and-one-sliced-plum-with-flesh-and-pit-showing.jpg?b=1&s=612x612&w=0&k=20&c=KrLamjZ1xeagLcYc5F4uS7ycBFxFoVRZcRRo1YqWayM=",
    price: "100 / kg",
  },
  {
    id: 9,
    name: "Avocado",
    image: "https://media.istockphoto.com/id/1210634323/photo/avocado-on-old-wooden-table-in-bowl.jpg?b=1&s=612x612&w=0&k=20&c=tixKcpE946ntCMtCqe3XuWXEcSvP-wCMvCmWg7rdYKA=",
    price: "100 / kg",
  },
  {
    id: 10,
    name: "Watermelon",
    image: "https://media.istockphoto.com/id/1321448019/photo/ripe-juicy-watermelon-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=hLECpgmxK1eUCnX2bXDRHvhBRg2hESCwxQy-bb_OWTs=",
    price: "100/ kg",
  },
  {
    id: 11,
    name: "Kiwi",
    image: "https://media.istockphoto.com/id/537403487/es/foto/kiwi.jpg?b=1&s=612x612&w=0&k=20&c=SgV-zW5gTS1DtEq_JzYM90n1T2ru4B1rcnRY3qvVnhU=",
    price: "300 / kg",
  },
  {
    id: 12,
    name: "Apricot",
    image: "https://media.istockphoto.com/id/1276593770/photo/apricots-apricot-isolate-apricots-with-slice-on-white-fresh-apricots-with-clipping-path-full.jpg?b=1&s=612x612&w=0&k=20&c=7Z3_YJzt2Qq4DNIJiSs5RpBRpYLbAUFiI9nAecPbb5k=",
    price: "2oo / kg",
  },
  {
    id: 14,
    name: "Blue Berries",
    image: "https://media.istockphoto.com/id/529677122/photo/blueberry-antioxidant-organic-superfood.jpg?b=1&s=612x612&w=0&k=20&c=TYbNvdQFCM9ST0aX-2Pz9S4RlV1A3pWvHusT-qbUDGU=",
    price: "120/ kg",
  },
  {
    id: 15,
    name: "Goosebarries",
    image: "https://media.istockphoto.com/id/184290018/photo/green-gooseberries-on-a-white-background.jpg?b=1&s=612x612&w=0&k=20&c=hhruvNPHx7UcO1kxd1IEGKCMoNLqPsRWM641IF8zEcU=",
    price: "150 / kg",
  },
  {
    id: 16,
    name: "Pomegrantes",
    image: "https://media.istockphoto.com/id/1210998321/photo/opened-pomegranate-display-in-a-market.jpg?b=1&s=612x612&w=0&k=20&c=73CWcJ9TWObyoyhRMfhKX7M0otiTbMLt2vjTA0yiq4k=",
    price: "100/ kg",
  },
  {
    id: 17,
    name: "Durian",
    image: "https://media.istockphoto.com/id/1348357668/photo/durian-riped-and-fresh.jpg?b=1&s=612x612&w=0&k=20&c=7GwkVRh1eHGiw-So_QD5IFFI3M4Hgl9KQxS8hDT19WA=",
    price: "60 / kg",
  },
  {
    id: 18,
    name: "cherries",
    image: "https://media.istockphoto.com/id/157428769/photo/cherry-trio-with-stem-and-leaf.jpg?b=1&s=612x612&w=0&k=20&c=FxgeB5NCxHzc5Jh5uJC60qz_ZRn2ntxUQwu81cHZb84=",
    price: "200 / kg",
  },
  {
    id: 19,
    name: "Dates",
    image: "https://media.istockphoto.com/id/478917283/photo/dried-dates.jpg?b=1&s=612x612&w=0&k=20&c=usCloayjU3lLqFJgSc2PydR24OFiFS7BHjmcj1QRrIw=",
    price: "100 / kg",
  },
  {
    id: 20,
    name: "Fresh Guavas",
    image: "https://media.istockphoto.com/id/171575811/photo/guava.jpg?b=1&s=612x612&w=0&k=20&c=P-h7pFD35YP0rR3BvT7JWv9x3zrXRlxZeGRqTgwidQg=",
    price: "70 / kg",
  },
  {
    id: 21,
    name: "Ugli",
    image: "https://media.istockphoto.com/id/1313436203/photo/ripe-uglies-on-a-plate.jpg?b=1&s=612x612&w=0&k=20&c=K4LdrKQcle5m5WSlJHCpg7icGc2fdb_oUdr8_XKVB1M=",
    price: "120/ kg",
  },
  {
    id: 22,
    name: "Tamarind",
    image: "https://media.istockphoto.com/id/1267299918/photo/tamarind-fruit-background.jpg?b=1&s=612x612&w=0&k=20&c=fAjziKt_RqqlsiwSY163ZOkf2oHc_tIzfNP7aPSrzvg=",
    price: "40 / kg",
  },
  {
    id: 22,
    name: "Water Chestnut",
    image: "https://media.istockphoto.com/id/1145944654/photo/close-up-of-fresh-organic-raw-water-chestnuts-on-black-colored-wooden-surface-with-one-of.jpg?b=1&s=612x612&w=0&k=20&c=vuvxNHpExx40au5Ckaxyn-83ryFJs13P8OIp0qMhGOo=",
    price: "50/ kg",
  },
  {
    id: 22,
    name: "Musk Melon",
    image: "https://media.istockphoto.com/id/480915274/photo/fresh-melon.jpg?b=1&s=612x612&w=0&k=20&c=Oh64YXvB9ViROZoO41y9PtPRs4zsp67UmTeJRHpoITY=",
    price: "120 / kg",
  },
  {
    id: 23,
    name: "Mulberry",
    image: "https://media.istockphoto.com/id/1386191320/photo/fresh-and-organic-mulberry-fruits.jpg?b=1&s=612x612&w=0&k=20&c=6VWyxIBb54avT-4G0SwahenprBmERGlEgaVHvD8R8I4=",
    price: "80 / kg",
  },
];

function Fruits() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`Rs ${product.name} added to cart successfully!`, {
      position: "top-right",
      autoClose: 1000,
      theme: "colored",
    });
  };

  useEffect(() => {
    document.title = "Fruits";
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="fruit-banner"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/collage-fruits-isolated-white-with-copy-space-fresh-healthy-fruits-berries-close-up_88281-742.jpg?w=1480')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1>Fresh Fruits</h1>
        <p class="text-black fw-bold">Delicious and healthy fruits picked just for you!</p>
      </div>

      {/* Fruits Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {FruitsProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '250px', objectFit: 'contain' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Rs. {product.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fruits;
