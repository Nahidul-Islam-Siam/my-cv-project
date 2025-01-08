import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64">
      <div className="relative"> {/* For positioning the badge */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-2 left-2 inter-font bg-white text-[#121212] text-base font-bold px-1 rounded">
          NEW
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="text-yellow-400 mr-1">★★★★</div> {/* 4 Stars */}
            <div className="text-gray-400 text-xs">(13)</div>
        </div>
        <h3 className="text-gray-800 font-semibold text-lg line-clamp-2 mb-1"> {/* Added line clamping */}
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm">${product.price}</p>
        <button className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;