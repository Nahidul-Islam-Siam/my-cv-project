import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import Cart from "./Cart";
import Checkout from "./Checkout";
// import OrderComplete from "./OrderComplete";

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

  // Handle tab change
  const handleChange = (event, newValue) => {
    setActiveStep(newValue);
    navigate(stepPaths[newValue]);
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
    <Box sx={{ width: "100%", p: 2 }}>
      {/* Tabs Header */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Tabs
          value={activeStep}
          onChange={handleChange}
          aria-label="Cart Stepper"
          centered
          TabIndicatorProps={{
            style: { backgroundColor: "#23262F" },
          }}
          sx={{
            "& .MuiTab-root": { textTransform: "none", fontSize: "1.2rem", fontWeight: "500" },
            "& .Mui-selected": { color: "#23262F !important" },
          }}
        >
          {steps.map((label, index) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
      </Box>

      {/* Dynamic Header */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 4, color: "#23262F" }}
      >
        {steps[activeStep]}
      </Typography>

      {/* Step Content */}
      <Box>{renderStepContent()}</Box>
    </Box>
  );
};

export default CartStepper;
