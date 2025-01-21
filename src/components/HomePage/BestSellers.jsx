
import Heading from "../commoon/Heading";
import ProductCard from "../commoon/ProductCard";
import useBestSellers from "../Hooks/BestSellers";





const ProductList = () => {
  const {bestSellers} = useBestSellers();
  return (
    <div className="py-16 ">
  <Heading title="Best Sellers" />
      <div className="container mx-auto">
        <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 gap-8">
          {bestSellers.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>




  );
};

export default ProductList;