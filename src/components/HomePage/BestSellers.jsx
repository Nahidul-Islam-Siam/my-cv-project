
import { CiHeart } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="  overflow-hidden w-full max-w-[280px] h-[350px] group flex flex-col">
      <div className="relative h-[70%]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 inter-font bg-white text-[#121212] text-sm font-bold px-2 py-1 rounded">
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

      <div className="p-4 h-[30%] flex flex-col justify-between">
        <div className="flex text-[#141718] mb-2">
          {[...Array(5)].map((_, idx) => (
            <AiFillStar key={idx} size={12} className="text-[#141718]" />
          ))}
        </div>
        <h3 className="text-[#141718] inter-font font-semibold text-sm line-clamp-2 mb-2">
          {product.name}
        </h3>
        <p className="text-[#121212] inter-font text-sm">${product.price}</p>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired,
  }).isRequired,
};


const products = [
  {
    image: '/sony-wh-ch720n.png',
    name: 'Sony-WH-1000XM5 Wireless Noise Canceling Headphones',
    price: '299.90',
    isNew: true,
  },
  {
    image: '/sony-wh-ch720n.png',
    name: 'Beats Studio Pro Headphones',
    price: '349.99',
    isNew: false,
  },
  {
    image: '/sony-wh-ch720n.png',
    name: 'Sony-WH-CH720N Wireless Noise Canceling Headphones',
    price: '149.99',
    isNew: false,
  },
  {
    image: '/sony-wh-ch720n.png',
    name: 'Skullcandy- Rail True Wireless Earbuds',
    price: '79.99',
    isNew: true,
  },
    {
    image: '/sony-wh-ch720n.png',
    name: 'Beats Studio Pro Headphones',
    price: '249.99',
    isNew: false,
  },
  {
    image: '/sony-wh-ch720n.png',
    name: 'JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports',
    price: '179.95',
    isNew: false,
  },
    {
    image: '/sony-wh-ch720n.png',
    name: 'Bose QuietComfort Headphones',
    price: '349.00',
    isNew: true,
  },
    {
    image: '/sony-wh-ch720n.png',
    name: 'AKG Y600NC Wireless Headphones',
    price: '349.99',
    isNew: false,
  },
];

const ProductList = () => {
  return (
    <div className="py-16 ">
   <div className="flex items-center justify-between pb-10">
    <h2 className="text-4xl sm:text-5xl font-medium whitespace-nowrap leading-none">
      Best Sellers
    </h2>
    <div className="custom-pagination flex items-center" />
  </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;