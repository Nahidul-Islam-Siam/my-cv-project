import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  if (!product) {
    console.error("Product is undefined or invalid:", product);
    return null; // Do not render the component if the product is invalid
  }

  return (
    <div className="overflow-hidden w-full max-w-[280px] h-[350px] group flex flex-col">
      {/* Image Section */}
      <div className="relative h-[70%]">
        <img
          src={product.image || "/placeholder-image.png"}
          alt={product.name || "Product Image"}
          className="w-full h-full object-cover"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 inter-font text-[#121212] text-sm font-bold px-2 py-1 rounded bg-yellow-300">
            NEW
          </span>
        )}
        <span className="absolute top-3 right-3 inter-font bg-white text-[#121212] text-sm font-bold px-2 py-1 rounded-full">
          <CiHeart size={20} />
        </span>
        <button className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-11/12 bg-[#141718] hover:bg-blue-700 text-white font-medium inter-font text-sm py-2 rounded-lg opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline">
          Add to Cart
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4 h-[30%] flex flex-col justify-between">
        <div className="flex text-[#141718] mb-2">
          {[...Array(5)].map((_, idx) => (
            <FaStar key={idx} size={12} className="text-[#141718]" />
          ))}
        </div>
        <h3 className="text-[#141718] inter-font font-semibold text-sm line-clamp-2 mb-2">
          {product.name || "Unnamed Product"}
        </h3>
        <p className="text-[#121212] inter-font text-sm">
          ${product.price || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
