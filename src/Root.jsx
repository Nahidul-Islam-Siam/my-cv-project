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
        path: "cart", 
        element: <Cart />,
      },
      {
        path: "checkout", 
        element: <Checkout />,
      },
    ],
  },
  {
    path:"/login",
    element:<LoginPage/>,
  },
  {
    path:"/Signup",
    element:<SignupPage/>,
  }
]);

export default router;
