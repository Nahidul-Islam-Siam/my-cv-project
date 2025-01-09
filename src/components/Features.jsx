import React from 'react';
import { FaTruck, FaMoneyBillWave, FaLock, FaPhoneAlt } from 'react-icons/fa'; // Import icons

const Features = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: 'Free Shipping',
      description: 'Order above $200',
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Money-back',
      description: '30 days guarantee',
    },
    {
      icon: <FaLock />,
      title: 'Secure Payments',
      description: 'Secured by Stripe',
    },
    {
      icon: <FaPhoneAlt />,
      title: '24/7 Support',
      description: 'Phone and Email support',
    },
  ];

  return (
    <div className="flex justify-center gap-4 py-8 bg-gray-100"> {/* Added background and padding */}
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md text-center w-64" // Added width
        >
          <div className="text-3xl text-gray-600 mb-2">{feature.icon}</div> {/* Icon styling */}
          <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
          <p className="text-gray-500 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;