import React from "react";
import hero from "../assets/HeroImage.png";

const Hero = () => {
  return (
    <div className="relative mx-auto  flex items-center">
      {/* Right Content: Background Image */}
      <div className="h-full">
        <img
          src={hero} // Replace with your image path
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Left Content: Text */}
      <div className="absolute flex flex-col items-start justify-center pl-12 text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
          Listen to <br /> the <span className="text-blue-600">amazing</span> <br /> music
          sound.
        </h1>
        <p className="text-lg text-gray-800 mt-4">
          Experience music like never before.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg text-lg shadow-md hover:bg-gray-800">
          Shopping Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
