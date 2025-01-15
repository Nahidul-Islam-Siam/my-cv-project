import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination } from 'swiper/modules';
import ProductCard from '../commoon/ProductCard';
import Heading from '../commoon/Heading';

const SlideCard = () => {

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
    return (
        <div className='py-12'>
              <Heading title="New Arrivals" />
                 <Swiper
        slidesPerView={4.5}
        freeMode={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination]}
        className="mySwiper"
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

export default SlideCard;