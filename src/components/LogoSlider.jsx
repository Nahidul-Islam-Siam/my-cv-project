import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Use named imports
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your logo images
import logo1 from '../assets/logo 01.png';
import logo2 from '../assets/logo 02.png';
import logo3 from '../assets/logo 03.png';
import logo4 from '../assets/logo 04.png';
import logo5 from '../assets/logo 05.png';
import logo6 from '../assets/logo 6.png';

const LogoSlider = () => {
  const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed

  const logos = [
    { src: logo1, alt: 'Logo 1' },
    { src: logo2, alt: 'Logo 2' },
    { src: logo3, alt: 'Logo 3' },
    { src: logo4, alt: 'Logo 4' },
    { src: logo5, alt: 'Logo 5' },
    { src: logo6, alt: 'Logo 6' },
  ];

  if (!isMobile) {
    return (
      <div className="logo-container-desktop"> {/* Added container for desktop */}
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="desktop-logo" />
        ))}
      </div>
    );
  }

  return (
    <div className="logo-slider-container">
      <Swiper
        spaceBetween={50} // Adjust spacing between slides
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
        // Add more Swiper options as needed (e.g., autoplay, pagination)
        onSlideChange={() => console.log('slide change')}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="logo-slide"> {/* Added a wrapper div */}
              <img src={logo.src} alt={logo.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
