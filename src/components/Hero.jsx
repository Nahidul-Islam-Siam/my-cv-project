
import hero from "../assets/image.png";

const Hero = () => {
  return (
    <section className="bg-[#FFC95B] p-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content (First on mobile) */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl poppins-font font-medium text-[#121212] leading-tight mb-4">
              Listen to <br /> the <span className="text-blue-600">amazing</span> <br /> music sound.
            </h1>
            <p className="text-base md:text-lg text-[#121212] mb-6">
              Experience music like never before.
            </p>
            <button className="bg-black text-white rounded-lg text-lg px-8 py-3 shadow-md hover:bg-gray-800 transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Image Container (Second on mobile) */}
          <div className="md:w-1/2">
            <img
              src={hero}
              alt="Hero Background"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;