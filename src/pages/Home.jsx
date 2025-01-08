import Hero from "../components/Hero";
import LogoSlider from "../components/LogoSlider";
import ProductSlider from "../components/NewArrival";

const Home = () => {
  return (
   <div>
       <Hero />
     <div className="flex flex-col gap-[20]">
   
      <LogoSlider />
      <ProductSlider />
    </div>
   </div>
  );
};

export default Home;
