import { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import PropTypes from 'prop-types';


const ProductDetails = ({ title, description, originalPrice, discountedPrice, timer, measurements, colors, selectedColor, onColorSelect }) => (
  <div>
    <h3 className="text-2xl font-bold text-gray-800 poppins-font ">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
    <div className="flex items-center mt-4">
      <span className="text-gray-500 line-through mr-2">${originalPrice}</span>
      <span className="text-2xl font-bold">${discountedPrice}</span>
    </div>

    <div className="mt-4">
      <p>Offer expires in:</p>
      <div className="flex gap-2 text-lg">
        <span>{timer.days} Days</span>
        <span>{timer.hours} Hours</span>
        <span>{timer.minutes} Minutes</span>
        <span>{timer.seconds} Seconds</span>
      </div>
    </div>

    <div className="mt-4">
      <p>Measurements:</p>
      <p>{measurements}</p>
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




const QuantitySelector = ({ quantity, onIncrement, onDecrement }) => (
  <div className="flex items-center border border-gray-300 px-3 py-2">
    <button onClick={onDecrement} className="p-1">
      <FaMinus />
    </button>
    <span className="mx-2">{quantity}</span>
    <button onClick={onIncrement} className="p-1">
      <FaPlus />
    </button>
  </div>
);

QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

const ProductDetail = () => {
  const [activeThumbnail, setActiveThumbnail] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [timer, setTimer] = useState({ days: 2, hours: 12, minutes: 45, seconds: 5 });
  const [selectedColor, setSelectedColor] = useState("Black");

  const images = [
    "/p4.png",
  "/p3.png",
    "/p3.png",
  ];

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

            <div className="mt-6 flex items-center gap-4">
              <QuantitySelector
                quantity={quantity}
                onIncrement={incrementQuantity}
                onDecrement={decrementQuantity}
              />
              <button className="bg-black text-white px-6 py-2 rounded font-semibold">Add to Cart</button>
              <button className="border border-gray-300 px-6 py-2 rounded flex items-center">
                <FaRegHeart className="mr-2" /> Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};





export default ProductDetail;

