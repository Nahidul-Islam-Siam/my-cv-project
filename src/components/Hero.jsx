import React from "react";
import hero from "../assets/image.png";

const Hero = () => {
  return (
    <div className="relative bg-[#FFC95B] mx-auto flex flex-col-reverse sm:flex-row items-center">
      <div className="w-full sm:w-1/2 h-64 sm:h-full">
        <img
          src={hero}
          alt="Hero Background"
          className="w-full h-auto sm:h-full object-cover" // Use h-auto for mobile
        />
      </div> 
      {/* Left Content: Text (on mobile, text will be above image) */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center p-6 sm:p-12 text-center sm:text-left bg-[#FFC95B]">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl poppins-font font-medium text-[#121212] leading-tight">
          Listen to <br /> the <span className="text-blue-600">amazing</span> <br /> music
          sound.
        </h1>
        <p className="text-base sm:text-lg text-[#121212] mt-4">
          Experience music like never before.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg text-lg shadow-md hover:bg-gray-800 w-1/2 mx-auto sm:mx-0">
  Shopping Now
</button>

      </div>
    </div>
  );
};

export default Hero;
