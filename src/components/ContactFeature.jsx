import freeShippingImage from '../assets/fast delivery.png'; 
import moneyBackImage from '../assets/money.png'; 
import securePaymentsImage from '../assets/lock 01.png'; 
import supportImage from '../assets/call.png';

const FeatureContact = () => {
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
    <div className="bg-gray-100 py-12"> {/* Optional background and padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 mb-2"> {/* Adjust size as needed */}
                <img src={feature.image} alt={feature.title} className="w-6 h-6" /> {/* Use your icon image */}
              </div>
              <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureContact;
