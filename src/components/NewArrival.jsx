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
    image: '/skullcandy-crusher.png', // Replace with your image paths
  },
  {
    name: 'Beats Studio Pro',
    price: '$349.99',
    image: '/beats-studio-pro.png',
  },
  {
    name: 'Sony - WH-CH720N Wireless Noise Canceling',
    price: '$149.99',
    image: '/sony-wh-ch720n.png',
  },
  {
    name: 'Skullcandy - Rail True Wireless Earbuds',
    price: '$79.99',
    image: '/skullcandy-rail.png',
  },
  {
    name: 'Beats Studio Pro',
    price: '$224.99',
    image: '/beats-studio-pro-2.png',
  },
  {
    name: 'Beats Studio Pro',
    price: '$224.99',
    image: '/beats-studio-pro-2.png',
  },
];

const ProductSlider = () => {
  return (
    <div className="product-slider">
      <h2>New Arrivals</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="product-card">
              <div className="product-header">
                <span className="badge">NEW</span>
                <button className="wishlist-btn">♡</button>
              </div>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <button className="add-to-cart-btn">Add to cart</button>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <div className="product-rating">★★★★★</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
