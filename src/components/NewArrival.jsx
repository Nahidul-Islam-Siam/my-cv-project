import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';

const products = [
  {
    name: 'Skullcandy - Crusher ANC 2 Wireless Headphones',
    price: 299.99,
    image: '/skullcandy-crusher.png',
    rating: 4,
    reviewCount: 13,
    isNew: true,
  },
  {
    name: 'Beats Studio Pro',
    price: 349.99,
    image: '/beats-studio-pro..png',
    rating: 5,
    reviewCount: 20,
    isNew: true,
  },
  {
    name: 'Sony - WH-CH720N Wireless Noise Canceling',
    price: 149.99,
    image: '/sony-wh-ch720n.png',
    rating: 4,
    reviewCount: 8,
    isNew: false,
  },
  {
    name: 'Skullcandy - Rail True Wireless Earbuds',
    price: 79.99,
    image: '/skullcandy-crusher.png',
    rating: 3,
    reviewCount: 5,
    isNew: false,
  },
  {
    name: 'Beats Studio Pro',
    price: 224.99,
    image: '/beats-studio-pro-2.png',
    rating: 5,
    reviewCount: 18,
    isNew: true,
  },
  {
    name: 'Beats Studio Pro',
    price: 224.99,
    image: '/beats-studio-pro-2.png',
    rating: 5,
    reviewCount: 18,
    isNew: true,
  },
];

const ProductSlider = () => {
  return (
    <div className="product-slider mt-10">
  <div className="flex items-center justify-between pb-10">
    <h2 className="text-4xl sm:text-5xl font-medium whitespace-nowrap leading-none">
      New Arrivals
    </h2>
    <div className="custom-pagination flex items-center" />
  </div>

  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={16} // Reduced for a tighter layout
    slidesPerView={4.5} // Show 4 full cards and part of the 5th
    pagination={{ clickable: true, el: '.custom-pagination' }} // Link custom pagination
    breakpoints={{
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 12,
      },
      1024: {
        slidesPerView: 4.5,
        spaceBetween: 16,
      },
    }}
  >
    {products.map((product, index) => (
      <SwiperSlide key={index}>
        <ProductCard product={product} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
  );
};

export default ProductSlider;
