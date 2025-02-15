import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ImageSlider = ({ images, activeThumbnail, onThumbnailClick }) => (
  <div className="flex flex-col gap-4">
    <motion.div 
      className="bg-white shadow p-2 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span 
        className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
      >
        NEW
      </motion.span>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="w-full"
        initialSlide={activeThumbnail}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full object-contain"
              style={{ aspectRatio: '1/1' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>

    <motion.div 
      className="bg-white p-2 w-full overflow-x-auto whitespace-nowrap"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex gap-4">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Product thumbnail ${index + 1}`}
            className={`w-20 h-20 object-cover cursor-pointer shadow-md ${
              activeThumbnail === index
                ? 'border-2 border-black'
                : 'border-2 border-transparent'
            }`}
            onClick={() => onThumbnailClick(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>
    </motion.div>
  </div>
);
ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeThumbnail: PropTypes.number.isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
};


export default ImageSlider;