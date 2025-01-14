// import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Product from "./pages/Product";
// import ContactUs from "./pages/ContactUs";
// import SignupPage from "./pages/SignUp";
// import LoginPage from "./pages/Login";
// import Cart from "./components/Cart";
// import Checkout from "./components/Checkout";
// import CartStepper from "./components/CartStepper";
// import OrderComplete from "./components/OrderComplete";
// // import Dashboard from "./pages/AccountDashboard";
// // import AccountDashboard from "./pages/AccountDashboard";
// import MiniDrawer from "./components/admin/Das";
// import Account from "./components/admin/Account";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/", // Home route
//         element: <Home />,
//       },
//       {
//         path: "shop", // Shop route
//         element: <Shop />,
//       },
//       {
//         path: "product", // Product route
//         element: <Product />,
//       },
//       {
//         path: "contact", // Contact Us route
//         element: <ContactUs />,
//       },
//       {
//         path: "cartpage", // CartStepper parent route
//         element: <CartStepper />,
//         children: [
//           {
//             path: "cart", // Cart route
//             element: <Cart />,
//           },
//           {
//             path: "checkout", // Checkout route
//             element: <Checkout />,
//           },
//           {
//             path: "order-complete", // Order Complete route
//             element: <OrderComplete />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/signup",
//     element: <SignupPage />,
//   },
//   {
//     path: "dashboard", // Dashboard route
//     // element: <Dashboard />,
//     element: <MiniDrawer/>,
//     children: [
//    {
//         path: "account", // Nested Account Dashboard route
//         element: <Account />,
//       },
//     ],
//   },
// ]);

// export default router;
