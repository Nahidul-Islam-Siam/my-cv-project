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

  // Synchronize active step with the current URL
  useEffect(() => {
    const currentStep = stepPaths.indexOf(location.pathname);
    if (currentStep !== -1) {
      setActiveStep(currentStep);
    }
  }, [location.pathname]);

  // Handle step click
  const handleStepClick = (index) => {
    setActiveStep(index);
    navigate(stepPaths[index]);
  };

  // Render the content for each step
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
    <div className="container mx-auto pt-4 p-4 pb-8">
      {/* Dynamic Header */}
      <Typography
        variant="h4"
        className="text-[54px] font-medium poppins-font mb-20 mt-20 text-black text-center"
      >
        {steps[activeStep]}
      </Typography>

      {/* Stepper */}
      <div className="flex items-center relative w-full">
        {steps.map((label, index) => (
          <div
            key={label}
            className="flex-1 flex flex-row gap-4 items-center cursor-pointer"
            onClick={() => handleStepClick(index)}
          >
            {/* Step Circle */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-base font-semibold ${
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

      {/* Step Content */}
      <Box className="mt-8 bg-white shadow-md rounded-lg p-6">
        {renderStepContent()}
      </Box>
    </div>
  );
};

export default CartStepper;
