import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
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
    <div className="py-12">
      <Heading title="New Arrivals" />
      <div className="relative"></div>
      <Swiper className="my-swiper"
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={4.5}
     
     
     
      
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 5 },
          640: { slidesPerView: 2.5, spaceBetween: 6 },
          1024: { slidesPerView: 4.5, spaceBetween: 16 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
           <div style={{ width: '100%',height:'auto'  }}> {/* Adjust height */}
  <ProductCard product={product} />
</div>

          </SwiperSlide>
        ))}
      </Swiper>
      
          
    </div>
  );
};

export default SlideCard;
