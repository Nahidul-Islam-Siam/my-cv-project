import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm w-64 bg-white">
      {/* Header: Badge and Wishlist Icon */}
      <div className="flex justify-between items-center p-3">
        <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          NEW
        </span>
        <button
          className="w-6 h-6 flex justify-center items-center text-gray-400 hover:text-red-500"
          aria-label="Add to wishlist"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.5 3.5 5 5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C15.96 5.99 17.46 5 19 5c2 0 3.5 1.5 3.5 3.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      {/* Product Image */}
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <div className="text-yellow-500 text-sm mb-2">★★★★★</div>
        <h3 className="text-gray-800 text-lg font-semibold mb-1">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4">${product.price}</p>
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
