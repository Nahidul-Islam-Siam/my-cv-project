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
    <div className="w-full">
      {/* Hero section with full width */}
      <Hero />

      {/* Main content within a constrained container */}
      <div className="flex flex-col gap-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LogoSlider />
        <ProductSlider />
        <ProductCategories />
        <ProductList />
        <Promotion />
        <Features />
        <SocialMediaFollow />
      </div>

      {/* Newsletter section, optionally full-width */}
      <div className="bg-gray-100 py-16">
        <NewsletterSignup />
      </div>
    </div>
  );
};

export default Home;
