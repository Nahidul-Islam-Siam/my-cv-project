import { useState, useEffect } from 'react';
import headphonesImage from '../../assets/banner-2.png';

const Promotion = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-01-31T23:59:59'); // Replace with your target date
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="flex flex-col lg:flex-row-reverse bg-[#FFDD99] rounded-lg shadow-md w-full mx-auto overflow-hidden group">
      {/* Left side: Content */}
      <div className="w-full lg:w-1/2 p-6 flex flex-col space-y-4">
        <div>
          {/* Promotion header */}
          <h2 className="text-base text-[#377DFF] inter-font font-bold mb-2">
            PROMOTION
          </h2>

          {/* Main text */}
          <p className="mb-4 poppins-font text-[40px] text-[#121212] font-medium leading-tight">
            Hurry up! 40% OFF
          </p>
          <p className="mb-4 inter-font text-xl text-[#121212]">
            Thousands of high tech are waiting for you
          </p>

          {/* Countdown label */}
          <p className="mb-2 inter-font text-base text-[#141718]">
            Offer expires in:
          </p>

          {/* Countdown Timer */}
          <div className="flex gap-6 mb-4">
            {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
              <div key={unit} className="flex flex-col items-center">
                <div className="bg-[#FEFEFE] p-3 text-[32px] rounded text-center poppins-font font-medium w-fit">
                  {formatTime(timeLeft[unit] || 0)}
                </div>
                <span className="text-sm inter-font mt-1 text-[#141718]">
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-action button */}
        <button className="w-40 bg-[#141718] hover:bg-blue-700 text-white font-medium inter-font text-sm py-2 rounded-lg focus:shadow-outline">
          Shop Now
        </button>
      </div>

      {/* Right side: Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={headphonesImage}
          alt="Headphones"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

export default Promotion;
