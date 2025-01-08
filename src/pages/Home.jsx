import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
import ProductSlider from "../components/NewArrival";

const Home = () => {
  return (
   <div>
       <Hero />
     <div className="home-container">
   
      <LogoSlider />
      <ProductSlider />
    </div>
   </div>
  );
};

export default Home;
