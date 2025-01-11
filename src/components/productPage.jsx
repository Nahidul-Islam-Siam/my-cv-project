import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";

import PropTypes from 'prop-types';





import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


const ImageSlider = ({ images, activeThumbnail, onThumbnailClick }) => {
    const swiperRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(activeThumbnail);
  
    const goNext = () => {
      if (swiperRef.current?.swiper) swiperRef.current.swiper.slideNext();
    };
  
    const goPrev = () => {
      if (swiperRef.current?.swiper) swiperRef.current.swiper.slidePrev();
    };
  
    const handleSlideChange = (swiper) => {
      setCurrentSlide(swiper.activeIndex);
    };
  
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") goPrev();
        if (event.key === "ArrowRight") goNext();
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);
  
    return (
      <div className="flex flex-col gap-4">
        <div className="bg-white shadow p-2 relative">
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</span>
          <div className="relative">
            <button
              className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={goPrev}
            >
              <FaChevronLeft />
            </button>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              onSlideChange={handleSlideChange}
              className="w-full"
              initialSlide={activeThumbnail}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full object-contain"
                    style={{ aspectRatio: "1/1" }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={goNext}
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="mt-2 flex justify-center">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentSlide === index ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
  
        <div className="bg-white p-2 w-full overflow-x-auto whitespace-nowrap">
          <div className="flex gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                className={`w-20 h-20 object-cover cursor-pointer shadow-md ${
                  activeThumbnail === index ? "border-2 border-black" : "border-2 border-transparent"
                }`}
                onClick={() => onThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  




const ProductDetails = ({ title, description, originalPrice, discountedPrice, timer, measurements, colors, selectedColor, onColorSelect }) => (
  <div>
    <h3 className="  text-[#141718] poppins-font font-medium text-[40px]">{title}</h3>
    <p className="mt-2 inter-font text-[#6C7275] text-base">{description}</p>
    <div className="flex items-center mt-4">
    <span className="text-[28px] mr-2 text-[#121212] poppins-font font-medium">${discountedPrice}</span>
      <span className="text-xl line-through mr-2 text-[#6C7275] poppins-font font-medium ">${originalPrice}</span>
     <hr />
    </div>

    <div className="mt-4 mb-5">
      <p className="inter-font mb-5 text-base text-[#343839]">Offer expires in:</p>
      <hr  className="divide-x-0  mb-5"/>
      <div className="flex gap-2  text-lg">
        <span>{timer.days} Days</span>
        <span>{timer.hours} Hours</span>
        <span>{timer.minutes} Minutes</span>
        <span>{timer.seconds} Seconds</span>
      </div>
    </div>
    <hr  className="divide-x-0  mb-5"/>
    <div className="mt-4">
      <p className="inter-font font-semibold text-base text-[#6C7275]">Measurements:</p>
      <p className="inter-font  text-xl text-[#000000]">{measurements}</p>
    </div>

    <div className="mt-4">
      <p className="font-semibold">Choose Color:</p>
      <div className="flex gap-2 mt-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
              color.toLowerCase() === selectedColor.toLowerCase()
                ? 'border-black'
                : 'border-gray-400'
            } ${color.toLowerCase() === 'black' ? 'bg-black' : 'bg-white'}`}
            onClick={() => onColorSelect(color)}
          ></div>
        ))}
      </div>
    </div>
  </div>
);



const QuantitySelector = ({ quantity, onIncrement, onDecrement, maxQuantity = 10 }) => {
  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") onIncrement();
    if (event.key === "ArrowDown") onDecrement();
  };

  return (
    <div
      className="flex items-center bg-white border rounded-md border-gray-300 px-3 py-2"
      onKeyDown={handleKeyDown}
      tabIndex={0} // Make the div focusable for keyboard interactions
    >
      <button
        onClick={onDecrement}
        disabled={quantity <= 1}
        className={`p-1 ${quantity <= 1 ? "text-gray-400 cursor-not-allowed" : ""}`}
        title={quantity <= 1 ? "Minimum quantity reached" : ""}
      >
        <FaMinus />
      </button>
      <span className="mx-2">{quantity}</span>
      <button
        onClick={onIncrement}
        disabled={quantity >= maxQuantity}
        className={`p-1 ${quantity >= maxQuantity ? "text-gray-400 cursor-not-allowed" : ""}`}
        title={quantity >= maxQuantity ? "Maximum quantity reached" : ""}
      >
        <FaPlus />
      </button>
    </div>
  );
};





const ProductDetails = ({ title, description, originalPrice, discountedPrice, timer, measurements, colors, selectedColor, onColorSelect }) => (
    <div>
      <h3 className="text-[#141718] poppins-font font-medium text-[40px]">{title}</h3>
      <p className="mt-2 inter-font text-[#6C7275] text-base">{description}</p>
      <div className="flex items-center mt-4">
        <span className="text-[28px] mr-2 text-[#121212] poppins-font font-medium">${discountedPrice}</span>
        <span className="text-xl line-through mr-2 text-[#6C7275] poppins-font font-medium">${originalPrice}</span>
      </div>
  
      <div className="mt-4 mb-5">
        <p className="inter-font mb-5 text-base text-[#343839]">Offer expires in:</p>
        <div className="flex gap-2 text-lg">
          <span>{timer.days} Days</span>
          <span>{timer.hours} Hours</span>
          <span>{timer.minutes} Minutes</span>
          <span>{timer.seconds} Seconds</span>
        </div>
      </div>
      <div className="mt-4">
        <p className="inter-font font-semibold text-base text-[#6C7275]">Measurements:</p>
        <p className="inter-font text-xl text-[#000000]">{measurements}</p>
      </div>
  
      <div className="mt-4">
        <p className="font-semibold">Choose Color:</p>
        <div className="flex gap-2 mt-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                color.toLowerCase() === selectedColor.toLowerCase() ? "border-black" : "border-gray-400"
              } ${color.toLowerCase() === "black" ? "bg-black" : "bg-white"}`}
              onClick={() => onColorSelect(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
  
 




export default ProductDetail;

ProductDetails.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    timer: PropTypes.shape({
      days: PropTypes.number.isRequired,
      hours: PropTypes.number.isRequired,
      minutes: PropTypes.number.isRequired,
      seconds: PropTypes.number.isRequired,
    }).isRequired,
    measurements: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedColor: PropTypes.string.isRequired,
    onColorSelect: PropTypes.func.isRequired,
  };
  
  ImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    activeThumbnail: PropTypes.number.isRequired,
    onThumbnailClick: PropTypes.func.isRequired,
  };  

  QuantitySelector.propTypes = {
    quantity: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    maxQuantity: PropTypes.number,
  };