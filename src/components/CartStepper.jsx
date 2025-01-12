import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Cart from "./Cart";
import Checkout from "./Checkout";
import OrderComplete from "./OrderComplete";

const CartStepper = () => {
  const steps = ["Shopping cart", "Checkout details", "Order complete"];
  const stepPaths = ["/cartpage/cart", "/cartpage/checkout", "/cartpage/order-complete"];
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentStep = stepPaths.indexOf(location.pathname);
    if (currentStep !== -1) {
      setActiveStep(currentStep);
    }
  }, [location.pathname]);

  const handleStepClick = (index) => {
    setActiveStep(index);
    navigate(stepPaths[index]);
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 0:
        return <Cart />;
      case 1:
        return <Checkout />;
      case 2:
        return <OrderComplete />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto pt-4 px-4 pb-8">
      {/* Dynamic Header */}
      <Typography
        variant="h4"
        className="text-[36px] sm:text-[48px] md:text-[54px] font-medium poppins-font mb-10 sm:mb-16 md:mb-20 mt-10 sm:mt-16 md:mt-20 text-black text-center"
      >
        {steps[activeStep]}
      </Typography>

      {/* Horizontal Stepper */}
      <div className="relative w-full">
        <div className="flex items-center justify-between overflow-x-auto">
          {steps.map((label, index) => (
            <div
              key={label}
              className="flex flex-col items-center cursor-pointer flex-1 min-w-[100px] px-2 sm:px-4"
              onClick={() => handleStepClick(index)}
            >
              {/* Step Circle */}
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white text-sm sm:text-base font-semibold ${
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
                className={`mt-2 text-xs sm:text-sm md:text-base text-center ${
                  activeStep === index
                    ? "text-black font-bold"
                    : "text-gray-500"
                }`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Line below steps */}
        <div className="mt-4 w-full h-1 bg-gray-300 flex">
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

      {/* Step Content */}
      <Box className="mt-6 sm:mt-8 bg-white shadow-md rounded-lg p-4 sm:p-6">
        {renderStepContent()}
      </Box>
    </div>
  );
};

export default CartStepper;
