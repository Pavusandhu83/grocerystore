import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
// Example products for the Oral Care category
const OralCareProducts = [
  {
    id: 1,
    name: "Toothpaste",
    image: "https://m.media-amazon.com/images/I/61hCDJ2c4ML._AC_UL640_FMwebp_QL65_.jpg",
    price: "123/ tube",
  },
  {
    id: 2,
    name: "Mouthwash",
    image: "https://m.media-amazon.com/images/I/51YuQGAWwWL._AC_UL640_FMwebp_QL65_.jpg",
    price: "133 / bottle",
  },
  {
    id: 3,
    name: "Toothbrush Set",
    image: "https://m.media-amazon.com/images/I/61KBJL0YFdL._AC_UL640_FMwebp_QL65_.jpg",
    price: "500 / pack",
  },
  {
    id: 4,
    name: "Dental Floss",
    image: "https://m.media-amazon.com/images/I/611IV0DXgFL._AC_UL640_FMwebp_QL65_.jpg",
    price: "80 / pack",
  },
  {
    id: 5,
    name: "Teeth Whitening Strips",
    image: "https://m.media-amazon.com/images/I/41d7bdskOcL._AC_UL640_FMwebp_QL65_.jpg",
    price: "199",
  },
  {
    id: 6,
    name: "Tongue Cleaner",
    image: "https://m.media-amazon.com/images/I/51VZ1D4IVOL._AC_UL640_FMwebp_QL65_.jpg",
    price: "99",
  },
  {
    id: 7,
    name: "Sugar-free mints",
    image: "https://m.media-amazon.com/images/I/71Uey4m0-GL._AC_UL640_FMwebp_QL65_.jpg",
    price: "59",
  },
  {
    id: 8,
    name: "Waxed dental floss",
    image: "https://cdn.store-assets.com/s/377840/i/16433732.jpeg",
    price: "199",
  },
  {
    id: 9,
    name: "Unwaxed dental floss",
    image: "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjQ1MmQ0YjFiNjRiMjMyNDFhMDZmMTNiLXBvaC1kZW50YWwtZmxvc3MtdW53YXhlZC0xMDAteWFyZC00LmpwZw.jpg",
    price: "399",
  },
  {
    id: 10,
    name: "Floss picks",
    image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/plc/plc19600/y/12.jpg",
    price: "338",
  },
  {
    id: 11,
    name: "Teeth Whitening Strips",
    image: "https://m.media-amazon.com/images/I/51i9o4bPWuL._AC_UF1000,1000_QL80_.jpg",
    price: "439/",
  },
 
];

function OralCare() 
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
    document.title = "Oral Care";
  }, []);
  return (
    <div>
      {/* Banner Section */}
      <ToastContainer />
      <div
        className="oral-care-banner"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/high-angle-view-electric-lamp-against-blue-background_1048944-15000613.jpg?w=1480')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'black',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <h1 class='fw-bold'>Oral Care Essentials</h1>
        <p>Maintain fresh breath and a healthy smile with our top-quality oral care products.</p>
      </div>

      {/* Oral Care Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {OralCareProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top oral-care-image"
                  alt={product.name}
                  style={{ height: '250px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price}</p>
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

export default OralCare;
