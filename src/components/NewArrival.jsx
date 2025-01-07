import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const products = [
  {
    name: 'Skullcandy - Crusher anc 2 wireless headphones',
    price: '$299.99',
    image: '/skullcandy-crusher.jpg', // Replace with your image paths
  },
  {
    name: 'Beats Studio Pro',
    price: '$349.99',
    image: '/beats-studio-pro.jpg',
  },
  {
    name: 'Sony - WH-CH720N Wireless Noise Canceling',
    price: '$149.99',
    image: '/sony-wh-ch720n.jpg',
  },
  {
    name: 'Skullcandy - Rail True Wireless Earbuds',
    price: '$79.99',
    image: '/skullcandy-rail.jpg',
  },
  {
    name: 'Beats Studio Pro',
    price: '$224.99',
    image: '/beats-studio-pro-2.jpg',
  },
];

const ProductSlider = () => {
  return (
    <div className="product-slider">
      <h2>New Arrivals</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20} // Adjust spacing between slides
        slidesPerView={3} // Number of slides visible at a time
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // When window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // When window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // When window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                {/* Add to cart button or other actions */}
                <button>Add to cart</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;