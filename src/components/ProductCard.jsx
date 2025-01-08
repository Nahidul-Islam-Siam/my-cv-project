// ProductCard.jsx
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64 group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 inter-font bg-white text-[#121212] text-base font-bold px-1 rounded">
            NEW
          </span>
        )}
        <span className="absolute top-3 right-3 inter-font bg-white text-[#121212] text-base font-bold px-1 py-1 rounded-full">
          <CiHeart size={24} />
        </span>
        <button className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-11/12 bg-[#141718] hover:bg-blue-700 text-[#FEFEFE] font-medium inter-font text-base py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline">
          Add to Cart
        </button>
      </div>

      <div className="p-4">
        <div className="flex text-[#141718] mb-2">
          {[...Array(5)].map((_, idx) => (
            <FaStar key={idx} size={12} className="text-yellow-400" />
          ))}
        </div>
        <h3 className="text-[#141718] inter-font font-semibold text-base line-clamp-2 mb-1">
          {product.name}
        </h3>
        <div className="text-gray-400 text-xs mb-2">({product.reviewCount})</div>
        <p className="text-gray-600 text-sm">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
