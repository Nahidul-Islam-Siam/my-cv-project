import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';

const products = [
  {
    name: 'Skullcandy - Crusher anc 2 wireless headphones',
    price: '$299.99',
    image: '/skullcandy-crusher.png',
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
      <h2 className='font-medium text-[40px] poppins-font'>New Arrivals</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} /> {/* Pass product data to ProductCard */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
