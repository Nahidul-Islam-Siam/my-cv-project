import  { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa'; // Import email icon
import newsletterBg from '../../assets/NewsLetter.png'
import { motion } from 'framer-motion';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail(''); // Clear the input
  };

  return (
    <div
      className="relative bg-cover bg-center rounded-lg shadow-md p-12 md:p-24"
      style={{ backgroundImage: `url(${newsletterBg})`, height: '100%' }}
    >
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0  opacity-40 rounded-lg"></div>

      {/* Content centered vertically and horizontally */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col justify-center items-center"
      >
        <h2 className="text-3xl md:text-[40px] font-medium poppins-font text-[#121212] mb-4">
          Join Our Newsletter
        </h2>
        <p className="mb-10 inter-font text-base md:text-lg text-[#121212]">
          Sign up for deals, new products, and promotions.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-4 w-full max-w-lg border-b-2 border-[#A7ABAC] pb-2"
        >
          <div className="relative flex-1">
            {/* Input with icon */}
            <FaEnvelope className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#A7ABAC]" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-base font-medium bg-transparent inter-font py-2 pl-9 pr-4 text-[#A7ABAC] focus:outline-none focus:ring-2 focus:ring-blue-500 w-full placeholder:text-[#A7ABAC]"
              aria-label="Email address"
              required
            />
          </div>
          <button
            type="submit"
            className="  text-sm  text-[#A7ABAC] inter-font font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Signup
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default NewsletterSignup;
