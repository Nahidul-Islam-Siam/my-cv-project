import ShopBG from '../assets/ShopBanner.png';

const ShopBanner = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ShopBG} // Replace with your image URL
          alt="Shop Background"
          className="w-full h-full object-cover opacity-50" // Adjust opacity as needed
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        {/* Breadcrumbs */}
        <div className="mb-4 text-[#605F5F] inter-font text-sm font-medium">
          <a href="/" className="hover:underline">
            Home
          </a>{' '}
          &gt; Shop
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Shop Page</h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-700">
          Let's design the place you always imagined.
        </p>
      </div>
    </div>
  );
};

export default ShopBanner;