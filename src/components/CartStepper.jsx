import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure you're using react-router-dom v6 or later

const CartStepper = ({ children }) => {
  const steps = ["Shopping cart", "Checkout details", "Order complete"];
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  // Handle step change and navigation
  const handleStepClick = (index) => {
    setActiveStep(index);
    switch (index) {
      case 0:
        navigate('/cart');
        break;
      case 1:
        navigate('/checkout');
        break;
      case 2:
        navigate('/order-complete');
        break;
      default:
        break;
    }
  };

  // Dynamic header based on the active step
  const getHeader = () => {
    switch (activeStep) {
      case 1:
        return "Checkout";
      case 2:
        return "Complete";
      default:
        return "Cart";
    }
  };

  return (
    <div className="container mx-auto p-4 pb-8">
      {/* Fixed Stepper */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md p-4">
        {/* Dynamic Header */}
        <h2 className="text-[54px] font-medium poppins-font mb-4 text-black text-center">
          {getHeader()}
        </h2>

        {/* Stepper */}
        <div className="flex items-center relative w-full">
          {steps.map((label, index) => (
            <div
              key={label}
              className="flex-1 flex flex-row gap-4 items-center cursor-pointer"
              onClick={() => handleStepClick(index)} // Update active step on click
            >
              {/* Step Circle */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-base inter-font font-semibold ${
                  activeStep === index
                    ? "bg-[#23262F]"
                    : index < activeStep
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              >
                {index < activeStep ? "✔" : index + 1}
              </div>

              {/* Step Label */}
              <p
                className={`mt-2 text-sm md:text-base ${
                  activeStep === index
                    ? "text-black font-bold"
                    : "text-gray-500"
                }`}
              >
                {label}
              </p>
            </div>
          ))}

          {/* Line under steps */}
          <div
            className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 flex"
            style={{ top: "4rem" }}
          >
            {steps.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-1 ${
                  index < activeStep ? "bg-green-500" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content below the stepper */}
      <div className="mt-36"> {/* Increased margin to account for the fixed stepper */}
        {/* Render passed children components */}
        {children}
      </div>
    </div>
  );
};

export default CartStepper;
