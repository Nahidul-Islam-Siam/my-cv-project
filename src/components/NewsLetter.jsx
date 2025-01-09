import React from 'react';
import newsletterBg from '../assets/newsletter-bg.jpg'; // Import your background image

const NewsletterSignup = () => {
  return (
    <div
      className="bg-cover bg-center h-48 rounded-lg shadow-md flex items-center justify-between p-8" // Added background image styles and height
      style={{ backgroundImage: `url(${newsletterBg})` }} // Set background image
    >
      <div className="text-white text-left"> {/* White text for contrast */}
        <h2 className="text-2xl font-bold mb-2">Join Our Newsletter</h2>
        <p className="text-white">
          Sign up for deals, new products and promotions
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;