import ProductList from "../components/HomePage/BestSellers";
import Features from "../components/HomePage/Features";
import Hero from "../components/HomePage/Hero";
import LogoSlider from "../components/HomePage/LogoSlider";
import ProductSlider from "../components/HomePage/NewArrival";
import NewsletterSignup from "../components/commoon/NewsLetter";


import Promotion from "../components/HomePage/Promotion";
import SocialMediaFollow from "../components/HomePage/SocialMediaFollow";
import ProductCategories from "../components/HomePage/ProductsCategories";

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
