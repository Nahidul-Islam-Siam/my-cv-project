import { useEffect,  useState } from "react";
import {
  //  FaChevronLeft, FaChevronRight,
   FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";

import PropTypes from 'prop-types';

// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '../../Style/ImageSlider.css';

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ImageSlider = ({images}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  return (
    <div>
      {/* Main Slider */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        loop={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
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





// Sample review data (replace with your actual data)
const reviewsData = [
    {
      name: 'Sofia Hartz',
      rating: 5,
      date: '3 weeks ago',
      comment: 'I just wanted to say "Awesome Product"! I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
      image: 'https://via.placeholder.com/40', // Placeholder image URL
    },
    {
      name: 'Nicolas Jensen',
      rating: 4,
      date: '3 weeks ago',
      comment: 'I just wanted to say "Awesome Product"! I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores excepturi sint occaecati cupiditate non provident.',
      image: 'https://via.placeholder.com/40', // Placeholder image URL
    },
      {
      name: 'Nicolas Jensen',
      rating: 4,
      date: '3 weeks ago',
      comment: 'I just wanted to say "Awesome Product"! I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores excepturi sint occaecati cupiditate non provident.',
      image: 'https://via.placeholder.com/40', // Placeholder image URL
    },
      {
      name: 'Nicolas Jensen',
      rating: 4,
      date: '3 weeks ago',
      comment: 'I just wanted to say "Awesome Product"! I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores excepturi sint occaecati cupiditate non provident.',
      image: 'https://via.placeholder.com/40', // Placeholder image URL
    },
      {
      name: 'Nicolas Jensen',
      rating: 4,
      date: '3 weeks ago',
      comment: 'I just wanted to say "Awesome Product"! I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores excepturi sint occaecati cupiditate non provident.',
      image: 'https://via.placeholder.com/40', // Placeholder image URL
    },
  ];
  





  const RatingStars = ({ rating }) => {
    const stars = [];
    // Loop to create star icons
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          ★
        </span>
      );
    }
    return <div>{stars}</div>;
 
  };
  


  
  
  const CommentSection = () => {
    return (
      <div className="container mx-auto p-4"> {/* Container with margin and padding */}
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2> {/* Main heading */}
  
        <div className="mb-4"> {/* Overall Rating */}
          <RatingStars rating={4.5} /> {/* Overall Rating stars*/}
          <span className="text-gray-500 ml-2">Based on {reviewsData.length} reviews</span> {/* Number of reviews */}
        </div>
  
        <div className="grid grid-cols-1 gap-4"> {/* Grid for reviews */}
          {reviewsData.map((review, index) => ( // Map through the reviews data
            <div key={index} className="bg-white rounded-lg shadow-md p-4"> {/* Review card styling */}
              <div className="flex items-start mb-2"> {/* Review header (image and name) */}
                <img src={review.image} alt={review.name} className="rounded-full w-10 h-10 mr-3" /> {/* User image */}
                <div>
                  <h3 className="font-medium">{review.name}</h3> {/* User name */}
                  <div className="flex items-center">
                      <RatingStars rating={review.rating} /> {/* Review rating stars */}
                      <span className="text-gray-500 ml-2 text-sm">{review.date}</span> {/* Review date */}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p> {/* Review comment */}
            </div>
          ))}
        </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Load More
            </button>
      </div>
    );
  };



const ProductDetail = () => {
    const [activeThumbnail, setActiveThumbnail] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [timer, setTimer] = useState({ days: 2, hours: 12, minutes: 45, seconds: 5 });
    const [selectedColor, setSelectedColor] = useState("Black");
    const [isWishlist, setIsWishlist] = useState(false); // Wishlist state
    const [cartMessage, setCartMessage] = useState(""); // Feedback for cart addition
  
    const images = ["/p4.png", "/p3.png", "/p3.png"];
    const colors = ["Black", "White"];
  
    useEffect(() => {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => {
          const { days, hours, minutes, seconds } = prevTimer;
          if (seconds > 0) return { ...prevTimer, seconds: seconds - 1 };
          if (minutes > 0) return { ...prevTimer, minutes: minutes - 1, seconds: 59 };
          if (hours > 0) return { ...prevTimer, hours: hours - 1, minutes: 59, seconds: 59 };
          if (days > 0) return { ...prevTimer, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
          clearInterval(countdown);
          return prevTimer;
        });
      }, 1000);
      return () => clearInterval(countdown);
    }, []);
  
    const handleThumbnailClick = (index) => setActiveThumbnail(index);
    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);
    const handleColorSelect = (color) => setSelectedColor(color);
  
    const toggleWishlist = () => {
      setIsWishlist(!isWishlist);
    };
  
    const addToCart = () => {
      setCartMessage("Item added to cart!");
      setTimeout(() => setCartMessage(""), 2000); // Clear message after 2 seconds
    };
  
    return (
      <div className="font-[sans-serif] p-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ImageSlider
              images={images}
              activeThumbnail={activeThumbnail}
              onThumbnailClick={handleThumbnailClick}
            />
            <div className="w-full">
              <ProductDetails
                title="Tray Table"
                description="Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks."
                originalPrice={400}
                discountedPrice={199}
                timer={timer}
                measurements="17 1/2x20 5/8 "
                colors={colors}
                selectedColor={selectedColor}
                onColorSelect={handleColorSelect}
              />
  
              <div className="space-y-4 mt-6">
                <div className="mt-6 flex flex-row gap-4">
                  <QuantitySelector
                    quantity={quantity}
                    onIncrement={incrementQuantity}
                    onDecrement={decrementQuantity}
                  />
                  <button
                    className={`w-full border px-6 py-2 rounded flex items-center justify-center ${
                      isWishlist ? "bg-red-100 text-red-600" : "border-gray-300 text-gray-600"
                    }`}
                    onClick={toggleWishlist}
                  >
                    <FaRegHeart className="mr-2" />
                    {isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                  </button>
                </div>
                <button
                  className="w-full bg-black text-white px-6 py-2 rounded font-semibold"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
                {cartMessage && (
                  <p className="mt-2 text-green-600 text-center">{cartMessage}</p>
                )}
              </div>
            </div>
          </div>
        </div>


        <CommentSection/>
      </div>
    );
  };
  


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
  RatingStars.propTypes = {
    rating: PropTypes.number.isRequired,
  };