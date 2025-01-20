
import Heading from "../commoon/Heading";
import ProductCard from "../commoon/ProductCard";



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
  <Heading title="Best Sellers" />
      <div className="container mx-auto">
        <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>




  );
};

export default ProductList;