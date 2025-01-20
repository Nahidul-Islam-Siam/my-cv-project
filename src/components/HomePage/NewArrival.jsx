// import { Swiper, SwiperSlide } from 'swiper/react';
// // import {  Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';


// import Heading from '../commoon/Heading';
// import '../../Style/NewArrival.css';
// import ProductCard from '../commoon/ProductCard';
// import { Pagination } from 'swiper/modules';

// const products = [
//   // Product data here...
// ];

// const ProductSlider = () => {
//   return (
//     <div className="py-12 container mx-auto">
//       <Heading title="New Arrivals" />

//       <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={16}
//         slidesPerView={4.5}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           320: { slidesPerView: 1.2, spaceBetween: 5 },
//           640: { slidesPerView: 2.5, spaceBetween: 6 },
//           1024: { slidesPerView: 4.5, spaceBetween: 16 },
//         }}
//       >
//         {products.map((product, index) => (
//           <SwiperSlide key={index}>
//             <ProductCard product={product} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ProductSlider;
