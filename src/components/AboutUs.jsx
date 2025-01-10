
const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16"> {/* Optional background color and padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="rounded-lg overflow-hidden shadow-lg"> {/* Added rounded corners and shadow */}
          <img
            src="YOUR_IMAGE_URL_HERE" // Replace with your actual image URL
            alt="About Us"
            className="w-full h-auto object-cover" // Ensures image covers container
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-700 mb-6">
            3legant is a gift & decorations store based in HCMC, Vietnam. Est.
            since 2019.
          </p>
          <p className="text-gray-700 mb-6">
            Our customer service is always prepared to support you 24/7
          </p>
          <a
            href="#" // Replace with your shop link
            className="inline-flex items-center bg-gray-800 border border-transparent rounded-md py-2 px-4 text-base font-medium text-white hover:bg-gray-700"
          >
            Shop Now
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 