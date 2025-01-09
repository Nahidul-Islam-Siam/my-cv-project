import React from 'react';

// Import your custom images (replace these paths with the actual image paths)
import freeShippingImage from '../assets/fast delivery.png'; 
import moneyBackImage from '../assets/money.png'; 
import securePaymentsImage from '../assets/lock 01.png'; 
import supportImage from '../assets/call.png';

const Features = () => {
  const features = [
    {
      image: freeShippingImage,
      title: 'Free Shipping',
      description: 'Order above $200',
    },
    {
      image: moneyBackImage,
      title: 'Money-back',
      description: '30 days guarantee',
    },
    {
      image: securePaymentsImage,
      title: 'Secure Payments',
      description: 'Secured by Stripe',
    },
    {
      image: supportImage,
      title: '24/7 Support',
      description: 'Phone and Email support',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-[#F3F5F7] p-6 rounded-lg shadow-md text-left w-full flex flex-col"
        >
          <div className="w-12 h-12 mb-4">
            <img src={feature.image} alt={feature.title} className="object-contain w-full h-full" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#121212]">{feature.title}</h3>
          <p className="text-gray-500 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
