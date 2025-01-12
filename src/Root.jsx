import { createBrowserRouter } from "react-router-dom"; // Ensure the correct package name
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";

import SignupPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import CartStepper from "./components/CartStepper";
import OrderComplete from "./components/OrderComplete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Home route
        element: <Home />,
      },
      {
        path: "shop", // Child route for Shop
        element: <Shop />,
      },
      {
        path: "product", // Child route for Product
        element: <Product />,
      },
      {
        path: "contact", // Child route for Contact Us
        element: <ContactUs />,
      },
      {
        path: "cartpage", // Parent route for CartStepper
        element: <CartStepper />,
        children: [
          {
            path: "cart", // Nested route for Cart
            element: <Cart />,
          },
          {
            path: "checkout", // Nested route for Checkout
            element: <Checkout />,
          },
          {
            path: "order-complete", // Nested route for Checkout
            element: <OrderComplete />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);

export default router;
