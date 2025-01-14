import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../Style/LogoSlider.css'

// Import your logo images
import logo1 from "../../assets/logo 01.png";
import logo2 from "../../assets/logo 02.png";
import logo3 from "../../assets/logo 03.png";
import logo4 from "../../assets/logo 04.png";
import logo5 from "../../assets/logo 05.png";
import logo6 from "../../assets/logo 6.png";

const LogoSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
  };

  useEffect(() => {
    // Check initial screen size
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
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
    // Static layout for desktop
    return (
      <div className="flex justify-around items-center py-5">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="max-w-[150px] h-auto"
          />
        ))}
      </div>
    );
  }

  // Slider layout for mobile
  return (
    <div className="w-full overflow-hidden py-5">
      <Swiper
        spaceBetween={20} // Adjust spacing between slides
        slidesPerView={3} // Number of slides visible at a time
        loop={true} // Enable infinite loop
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
