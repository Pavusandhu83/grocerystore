import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function BrandPage() {
  // Array of grocery items (can be dynamic based on your database or API)
  const groceryItems = [
    {
      id: 1,
      image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/1ca7cab3-bc8d-47f1-9044-23fa43d859d0-brookbond.jpg",
      price: "$5.00 / kg",
      route: "/apples",
    },
    {
      id: 2,
      image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/4c1174ab-e8fa-4a92-82f5-cae81aae1c8f-Britannia.jpg",
      price: "$3.00 / kg",
      route: "/carrots",
    },
    {
      id: 3,
      image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/bee1488a-3628-4d43-9b9a-509b27c49d58-Bru.jpg",
      price: "$2.50 / loaf",
      route: "/bread",
    },
    {
      id: 4,
      image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/43a2eb94-2fd5-4d51-8b81-c3285ac9c3bf-fortune.jpg",
      price: "$4.00 / kg",
      route: "/tomatoes",
    },
    {
      id: 5,
      image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/0a25adc2-5ec4-4507-ac05-26ce73ca5832-aachi.jpg",
      price: "$2.00 / bunch",
      route: "/lettuce",
    },
    {
      id: 6,
      image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/f6a9c802-4ca3-4dfd-b055-f1c186d26a6b-parle.jpg",
      price: "$1.50 / piece",
      route: "/avocados",
    },
    {
        id: 7,
        image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/9b4f6298-13e2-4936-a50b-dd9bc9ebe41a-Colgate.jpg",
        price: "$2.00 / bunch",
        route: "/lettuce",
      },
      {
        id: 8,
        image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/26819a66-b5f1-4547-8dc5-38073786bc6a-amul.jpg",
        price: "$2.00 / bunch",
        route: "/lettuce",
      },
      {
        id: 9,
        image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/47aa4bc6-2269-4941-9e4a-964322dc92b9-GRB.jpg",
        price: "$2.00 / bunch",
        route: "/lettuce",
      },
      {
        id: 10,
        image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/a5f8c4ad-730a-4683-a1fc-34ce5c47fe97-Maggie.jpg",
        price: "$2.00 / bunch",
        route: "/lettuce",
      },
      {
        id: 11,
        image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/3b59ca63-5c94-4244-a317-7f6f2914dc35-Fogg.jpg",
        price: "$2.00 / bunch",
        route: "/lettuce",
      },
      {
        id: 12,
        image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/a4062a5a-b23f-4938-99c0-b5dc14bac1db-Godrej.jpg",
        price: "$2.00 / bunch",
        route: "/lettuce",
      },
        {
        id: 13,
        image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/8dc6a242-65c1-4828-8d4c-f42d2b6e9688-Surfexcel.jpg",
        price: "$2.00 / bunch",
        route: "/lettuce",
      }, 
       {
        id: 14,
        image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/047da349-ee88-40f4-99a6-af18b3b00f94-Lakme.jpg",
        price: "$2.00 / bunch",
        route: "/lettuce",
      },
      {
        id:15 ,
        image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/96252104-d107-47aa-b45f-b21f26e81985-Natchiyar.jpg",
        price: "$2.00 / bunch",
        route: "/lettuce",
      },
      {
        id: 16,
        image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/817c233f-8867-4e92-a1cd-8239ea27d959-popzo.jpg",
        price: "$2.00 / bunch",
        route: "/lettuce",
      },
      {
        id: 17,
        image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/55567a41-82f0-4e38-9933-16e32b086e0a-Zopit.jpg",
        price: "$2.00 / bunch",
        route: "/lettuce",
      },
      {
        id: 18,
        image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/ce522ca0-15f2-4231-af81-057bb33c7f05-Aashirvaad.jpg",
        price: "$2.00 / bunch",
        route: "/lettuce",
      },
      {
        id: 19,
        image: "https://d1sl07a7h3d3fr.cloudfront.net/admin/store/3df0bd9a-4df9-493e-8d8a-b1cf8a74d56c-TataSampann.jpg",
        price: "$2.00 / bunch",
        route: "/lettuce",
      },
  ];

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
useEffect(() => {
          document.title = "Brands";
        }, []);
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold fs-1">Brands You love</h2>

      <Slider {...settings}>
        {groceryItems.map((item) => (
          <div key={item.id} className="card  brand ">
            <img
              src={item.image}
              alt={item.name}
              className="card-img-top brandcard mx-auto mt-5"
             
            />
            <div className="card-body text-center">
           

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BrandPage;
