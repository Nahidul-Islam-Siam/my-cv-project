// Import your custom images (replace these paths with the actual image paths)
import freeShippingImage from '../../assets/fast delivery.png'; 
import moneyBackImage from '../../assets/money.png'; 
import securePaymentsImage from '../../assets/lock 01.png'; 
import supportImage from '../../assets/call.png';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

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
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={item}
          className="bg-[#F3F5F7] p-4 sm:p-6 lg:p-8 rounded-lg shadow-md text-left w-full flex flex-col"
        >
          <div className="w-12 h-12 mb-4">
            <img src={feature.image} alt={feature.title} className="object-contain w-full h-full" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#121212]">{feature.title}</h3>
          <p className="text-gray-500 text-sm">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Features;
