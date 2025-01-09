import ProductList from "../components/BestSellers";
import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
import ProductSlider from "../components/NewArrival";
import ProductCategories from "../components/ProductsCategories";
import Promotion from "../components/Promotion";


const Home = () => {
  return (
    <div>
      {/* Hero section should take full width */}
      <Hero />

      {/* Content with a container that doesn't stretch full width */}
      <div className="flex flex-col gap-[20] max-w-7xl mx-auto px-4">
        <LogoSlider />
        <ProductSlider />
        <ProductCategories/>
        <ProductList />
 <Promotion/>
      </div>
    </div>
  );
};

export default Home;
