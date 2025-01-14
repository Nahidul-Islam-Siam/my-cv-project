import React from 'react';
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon
import image1 from '../assets/insta1.png'; // Path to your Instagram images
import image2 from '../assets/insta2.png';
import image3 from '../assets/insta3.png';
import image4 from '../assets/insta4.png';

const SocialMediaFollow = () => {
  const instagramImages = [image1, image2, image3, image4];

  return (
    <div className="p-8 rounded-lg text-center my-8">
      <h2 className="text-base text-[#6C7275] font-bold mb-2">NEWSFEED</h2>
      <div className="mb-6">
        <p className="text-[40px] text-[#121212] font-medium mb-2 poppins-font">Instagram</p>
        <p className="mb-4 inter-font text-[#121212]">
          Follow us on social media for more discount & promotions
        </p>
        <a
          href="https://www.instagram.com/3legant_official"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6C7275] hover:text-blue-700 font-medium text-lg"
        >
          @3legant_official
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {instagramImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg group"
          >
            <img
              src={image}
              alt={`Instagram Post ${index + 1}`}
              className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out flex items-center justify-center">
              <FaInstagram className="text-white text-4xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaFollow;
