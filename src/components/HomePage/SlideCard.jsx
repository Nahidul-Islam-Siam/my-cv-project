import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";
import ProductCard from '../commoon/ProductCard';
import Heading from '../commoon/Heading';
import { useEffect, useState } from "react";

const SlideCard = () => {
  const [products, setProducts] = useState([]);

  // Fetch product data
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/Products'); // Replace with your actual API endpoint
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
           <div className="max-w-[280px] h-[350px]" style={{ width: '100%',height:'100%'  }}> {/* Adjust height */}
  <ProductCard product={product} />
</div>

          </SwiperSlide>
        ))}
      </Swiper>
      
          
    </div>
  );
};

export default SlideCard;
