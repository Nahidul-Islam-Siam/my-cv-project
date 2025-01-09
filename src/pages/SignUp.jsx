import chairImage from '/collection.png'; // Import your chair image

const SignupPage = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2">
        <img
          src={chairImage}
          alt="Elegant Chair"
          className="object-cover h-full md:h-full w-full"
        />
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <h1 className="poppins-font text-lg md:text-2xl text-black font-medium">
            Sam Fashion
          </h1>
        </div>
      </div>

      {/* Signup Form Section */}
      <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center bg-white">
        <h2 className="text-3xl font-bold mb-6">Sign up</h2>
        <p className="text-gray-600 mb-8">
          Already have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree with{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Terms of Use
              </a>
            </label>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition duration-300">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
