import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import chairImage from '/collection.png'; // Import your chair image

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log('Form Data:', data); // Replace with form submission logic
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-60 md:h-screen">
        <img
          src={chairImage}
          alt="Elegant Chair"
          className="object-cover h-full w-full"
          loading="lazy"
        />
        <div className="absolute top-2 md:top-4 left-1/2 transform -translate-x-1/2">
          <h1 className="poppins-font text-base md:text-2xl text-black font-medium">
            Sam Fashion
          </h1>
        </div>
      </div>

      {/* Signup Form Section */}
      <div className="w-full md:w-1/2 px-4 py-6 md:p-16 flex flex-col justify-center bg-white">
        <h2 className="text-2xl md:text-3xl font-medium mb-4 md:mb-6 text-[#141718] poppins-font">
          Sign up
        </h2>
        <p className="text-sm md:text-base text-[#6C7275] mb-6">
          Already have an account?{' '}
          <a href="#" className="text-[#38CB89] font-semibold hover:underline">
            Sign in
          </a>
        </p>

        <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className={`w-full text-sm md:text-base text-[#6C7275] border-b ${
                errors.name ? 'border-red-500' : 'border-[#EBEEF1]'
              } rounded-md py-2 px-3 focus:outline-none focus:ring-2`}
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </div>

          {/* Username Field */}
          <div>
            <input
              type="text"
              id="username"
              {...register('username', { required: 'Username is required' })}
              className={`w-full text-sm md:text-base text-[#6C7275] border-b ${
                errors.username ? 'border-red-500' : 'border-[#EBEEF1]'
              } rounded-md py-2 px-3 focus:outline-none focus:ring-2`}
              placeholder="Username"
            />
            {errors.username && <p className="text-red-500 text-xs">{errors.username.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              className={`w-full text-sm md:text-base text-[#6C7275] border-b ${
                errors.email ? 'border-red-500' : 'border-[#EBEEF1]'
              } rounded-md py-2 px-3 focus:outline-none focus:ring-2`}
              placeholder="Email address"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              {...register('password', { required: 'Password is required' })}
              className={`w-full text-sm md:text-base text-[#6C7275] border-b ${
                errors.password ? 'border-red-500' : 'border-[#EBEEF1]'
              } rounded-md py-2 px-3 focus:outline-none focus:ring-2`}
              placeholder="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              {...register('terms', { required: 'You must accept the terms' })}
              className="mr-2 h-4 w-4"
            />
            <label htmlFor="terms" className="text-sm text-[#6C7275]">
              I agree with{' '}
              <a href="#" className="text-[#141718] font-semibold hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="#" className="text-[#141718] font-semibold hover:underline">
                Terms of Use
              </a>
            </label>
          </div>
          {errors.terms && <p className="text-red-500 text-xs">{errors.terms.message}</p>}

          {/* Submit Button */}
          <button className="w-full bg-black text-white text-sm md:text-base font-medium py-3 rounded-md hover:bg-gray-800 transition duration-300">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
