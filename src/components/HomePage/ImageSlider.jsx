
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import PropTypes from 'prop-types';

const ImageSlider = ({ images, activeThumbnail, onThumbnailClick }) => (
  <div className="flex flex-col gap-4">
    <div className="bg-white shadow p-2 relative">
      <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</span>
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
    </div>

    <div className="bg-white p-2 w-full overflow-x-auto whitespace-nowrap">
      <div className="flex gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product thumbnail ${index + 1}`}
            className={`w-20 h-20 object-cover cursor-pointer shadow-md ${
              activeThumbnail === index
                ? 'border-2 border-black'
                : 'border-2 border-transparent'
            }`}
            onClick={() => onThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  </div>
);
ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeThumbnail: PropTypes.number.isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
};


export default ImageSlider;