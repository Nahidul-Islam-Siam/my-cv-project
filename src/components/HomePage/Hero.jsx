import { motion } from 'framer-motion';
import hero from '../../assets/image.png'

const Hero = () => {
  return (
    <section className="bg-[#FFC95B] p-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content (First on mobile) */}
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl poppins-font font-medium text-[#121212] leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Listen to <br /> the <span className="text-blue-600">amazing</span> <br /> music sound.
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg text-[#121212] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Experience music like never before.
            </motion.p>
            <motion.button 
              className="bg-black text-white rounded-lg text-lg px-8 py-3 shadow-md hover:bg-gray-800 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </motion.div>

          {/* Image Container (Second on mobile) */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.img
              src={hero}
              alt="Hero Background"
              className="w-full object-cover rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;