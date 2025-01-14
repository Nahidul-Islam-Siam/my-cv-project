import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../Style/LogoSlider.css'


import logo1 from "../../assets/logo 01.png";
import logo2 from "../../assets/logo 02.png";
import logo3 from "../../assets/logo 03.png";
import logo4 from "../../assets/logo 04.png";
import logo5 from "../../assets/logo 05.png";
import logo6 from "../../assets/logo 6.png";

const LogoSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {

    handleResize();

    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const logos = [
    { src: logo1, alt: "Logo 1" },
    { src: logo2, alt: "Logo 2" },
    { src: logo3, alt: "Logo 3" },
    { src: logo4, alt: "Logo 4" },
    { src: logo5, alt: "Logo 5" },
    { src: logo6, alt: "Logo 6" },
  ];

  if (!isMobile) {

    return (
      <div className="flex justify-around items-center ">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="max-w-[150px] h-auto py-5"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={3} 
        loop={true} 
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full h-auto block"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
