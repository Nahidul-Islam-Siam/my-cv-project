import ProductList from "../components/BestSellers";
import Features from "../components/Features";
import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
import ProductSlider from "../components/NewArrival";
import NewsletterSignup from "../components/NewsLetter";
import ProductCategories from "../components/ProductsCategories";
import Promotion from "../components/Promotion";
import SocialMediaFollow from "../components/SocialMediaFollow";


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
 <Features/>
 <SocialMediaFollow/>
 <NewsletterSignup/>
      </div>
    </div>
  );
};

export default Home;
