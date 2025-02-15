import Heading from "../commoon/Heading";
import ProductCard from "../commoon/ProductCard";
import useBestSellers from "../Hooks/BestSellers";
import { motion } from "framer-motion";

const ProductList = () => {
  const { bestSellers } = useBestSellers();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-16">
      <Heading title="Best Sellers" />
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {bestSellers.map((product, index) => (
            <motion.div key={index} variants={item}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductList;