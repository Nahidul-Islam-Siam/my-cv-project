import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router";
import CartContext from "../Hooks/AddToCart";


const ProductCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  if (!product) {
    console.error("Product is undefined or invalid:", product);
    return null; // Do not render the component if the product is invalid
  }

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent the Link from navigating
    const { id, name, price } = product; 
    console.log(`Adding to cart: Product ID ${id}`)// Log the product ID
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, name, price }, 
    
    });
  };
  

  return (
    <Link to={`/Product/${product.id}`}>
      <div className="w-full max-w-[280px] h-[350px] group flex flex-col">
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
          <button
            onClick={handleAddToCart} // Handle Add to Cart click
            className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-11/12 bg-[#141718] hover:bg-blue-700 text-white font-medium inter-font text-sm py-2 rounded-lg opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all duration-300 ease-in-out focus:outline-none focus:shadow-outline"
          >
            Add to Cart
          </button>
        </div>

        {/* Content Section */}
        <div className="p-4 h-auto flex flex-col justify-between">
          <div className="flex text-[#141718] mb-2">
            {[...Array(5)].map((_, idx) => (
              <FaStar key={idx} size={12} className="text-[#141718]" />
            ))}
          </div>
          <h3 className="text-[#141718] inter-font text-left font-semibold text-sm line-clamp-2 mb-2">
            {product.name || "Unnamed Product"}
          </h3>
          <p className="text-[#121212] text-left inter-font text-sm">
            ${product.price || "N/A"}
          </p>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    isNew: PropTypes.bool,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ProductCard;
