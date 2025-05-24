
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import './Category.css'


function Category({ searchQuery = '' }) {
  const categories = [
    { name: "Fruits", image: "https://img.freepik.com/free-photo/high-angle-tasty-fruits-arrangement_23-2148545917.jpg?ga=GA1.1.1594875237.1742396260&semt=ais_hybrid&w=740", route: "/fruits" },
    { name: "Vegetables", image: "https://img.freepik.com/premium-photo/different-fresh-fruits-vegetables-healthy_3236-1579.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid", route: "/vegetables" },
    { name: "Dairy Products", image: "https://img.freepik.com/premium-photo/dairy-products-wood-base-blue-background-with-copy-space-vertical-format_1048944-11371121.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid", route: "/dairy" },
    { name: "Bakery Items", image: "https://img.freepik.com/premium-photo/french-croissants-pastry-products-basket-top-view_508835-3962.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid", route: "/bakery" },
    { name: "Beverages", image: "https://img.freepik.com/premium-photo/vibrant-assortment-colorful-cocktails-elegant-glassware_1300528-10826.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid", route: "/beverages" },
    { name: "Snacks", image: "https://img.freepik.com/premium-photo/rangoli-sweets-farsan-snacks-bowls-diwali-with-diya-white-background_466689-43311.jpg?ga=GA1.1.848940823.1741419253&semt=ais_hybrid", route: "/snacks" },
    { name: "Household Essentials", image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/category/81510193-e214-493e-8c74-111c96d8988e-9.jpg", route: "/householdessentials" },
    { name: "Cleaning Needs", image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/category/69ae604e-9916-4f94-ba47-85db5f0ffeb8-10.jpg", route: "/cleaningneeds" },
    { name: "Mens Grooming", image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/category/e3542ba5-b9db-4a04-b644-e23209bb5525-men.jpg", route: "/mensgrooming" },
    { name: "Creams and Lotions", image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/category/97521385-d412-4252-8b30-3cdb4ebc95a7-cream.jpg", route: "/creamsandlotions" },
    { name: "Health Care", image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/category/5bb32852-8ccf-44f1-8fcf-235db9a4a997-12.jpg", route: "/healthcare" },
    { name: "Baby care", image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/category/c01eb0bf-1bd9-46cb-a621-d91e4cbe6390-8.jpg", route: "/babycare" },
    { name: "Personal care", image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/category/66588801-343c-4fd1-a6b8-dbcfa2dd66e4-13.jpg", route: "/personalcare" },
    { name: "Ready to Cook", image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/category/68aebc4c-9b70-4846-8ab3-20a8f392327c-5(2).jpg", route: "/readytocook" },
    { name: "Ready to Eat", image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/category/b68437c2-4995-43bd-8b1d-223068007414-6(2).jpg", route: "/readytoeat" },
    { name: "Feminine care", image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/category/4f81f8b0-2484-41b6-ae95-30045ae09902-11.jpg", route: "/femininecare" },
    { name: "Oral Care", image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/category/548f2f50-df22-402e-b644-b085969e9d23-oral.jpg", route: "/oralcare" },
    { name: "Crokeries", image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/category/91f9ab02-6857-47cf-87ea-466856a7bbc2-Crockeries.jpeg", route: "/crockeries" },
  ];

  // Ensure searchQuery is always a string (default to empty string if undefined)
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
          useEffect(() => {
            document.title = "Category";
            AOS.init({
              duration: 800, // animation duration
              once: true,    // animate only once
            });
          }, []);
        

  return (
    <div>
      <h1 className="text-center my-5 title">
        Explore Our <span className="text-danger">Grocery Categories</span>
      </h1>
      <section id="category">
        <div className="row row-cols-1 row-cols-md-6 g-4 mx-5">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <div key={index} className="col" data-aos="fade-up" data-aos-delay={index * 100}>
              <div key={index} className="col">
              <div className="card-body text-center d-flex flex-column justify-content-between">

                  <img src={category.image} className="card-img-top categoryimg mx-auto mt-3" alt={category.name} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{category.name}</h5>
                    <Link to={category.route} className="btn btn-warning">
                      Explore Product
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            ))
          ) : (
            <p>No categories found</p>
          )}
        </div>
      </section>
           {/* 🔽 Banner After Cards */}
           <div className="  category-banner img text-center my-5">
        <img
          src="https://d1sl07a7h3d3fr.cloudfront.net/admin/store/pothys/banner/pothys_strip_banner.jpeg"
          alt="Promotional Banner"
          className="img-fluid rounded"

        />
{/* 🔽 Carousel After Cards */}
<div className="container my-5">
  <div
  id="categoryCarousel"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="3000"  // 👈 Slide every 3 seconds
>

    <div className="carousel-inner rounded shadow">
      <div className="carousel-item active">
        <img
          src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2FHarvest-festivel_4500-x-1125_08_april.jpg&w=3840&q=75"
          className="d-block w-100"
          alt="Fresh Produce"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2FSunbean_4500-x-1125.jpg&w=3840&q=75"
          className="d-block w-100"
          alt="Dairy Section"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2F4500-x-1125_soya-chunk_.jpg&w=3840&q=75"
          className="d-block w-100"
          alt="Bakery Delight"
        />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#categoryCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#categoryCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

    
      </div>
    </div>
  );
}

export default Category;








        