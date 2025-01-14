import AboutImage from "../../assets/AboutImage.png"
const AboutUs = () => {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className=""> {/* Added rounded corners and shadow */}
          <img
            src={AboutImage} // Replace with your actual image URL
            alt="About Us"
            className="w-full h-auto object-cover" // Ensures image covers container
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className=" mb-4 poppins-font font-medium text-[40px] text-[#121212]">About Us</h2>
          <p className="text-[#343839] inter-font text-base">
            3legant is a gift & decorations store based in HCMC,<br /> Vietnam. Est.
            since 2019.
          </p>
          <p className=" mb-6 text-[#343839] inter-font text-base ">
            Our customer service is always prepared to support you 24/7
          </p>
          <a
            href="#" // Replace with your shop link
            className="inline-flex items-center inter-font text-[#121212]  border-b border-transparent underline-offset-4 rounded-md py-2 px-4 underline  text-base font-medium "
          >
            Shop Now
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 