import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import logo1 from "../../assets/logo 01.png";
import logo2 from "../../assets/logo 02.png";
import logo3 from "../../assets/logo 03.png";
import logo4 from "../../assets/logo 04.png";
import logo5 from "../../assets/logo 05.png";
import logo6 from "../../assets/logo 6.png";

const LogoSlider = () => {
  const logos = [
    { src: logo1, alt: "Logo 1" },
    { src: logo2, alt: "Logo 2" },
    { src: logo3, alt: "Logo 3" },
    { src: logo4, alt: "Logo 4" },
    { src: logo5, alt: "Logo 5" },
    { src: logo6, alt: "Logo 6" },
  ];

  return (
    <div className="swiper-wrapper py-5 lg:py-10" style={{ width: '100%' }}>
  <Swiper
  modules={[Navigation]}
  spaceBetween={20} // Adjust space to suit the new dimensions
  slidesPerView={6}
loop={true}
  pagination={{ clickable: true }}
  breakpoints={{
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  }}
  className="logo-slider-container"
>
  {logos.map((logo, index) => (
    <SwiperSlide key={index}>
      <img
        src={logo.src}
        alt={logo.alt}
        className="logo-slider"
      />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

export default LogoSlider;
