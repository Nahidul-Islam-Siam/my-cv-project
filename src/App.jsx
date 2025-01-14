import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RootLayout from "./layout/RootLayout";
import Shop from "./pages/Shop";
import ContactInfo from "./components/ContactInfo";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Account from "./components/Account";

import Product from "./components/admin/Product";
import Category from "./components/admin/Category";
import Profile from "./components/admin/Profile";
import Dashboard from "./components/Dashobard";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full flex flex-col min-h-screen">
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Admin Dashboard Routes */}
            <Route path="dashboard" element={<RootLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="product" element={<Product />} />
              <Route path="category" element={<Category />} />
              <Route path="profile" element={<Profile />} />
            </Route>

            {/* Frontend Routes */}
            <Route path="/" element={< FrontRootLayout/>}>
              <Route path="shop" element={<Home />} />
              {/* <Route path="account" element={<Account />} /> */}
              <Route path="shop" element={<Shop />} />
              <Route path="contact" element={<ContactInfo />} />
              <Route path="cartpage">
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Cart />} />
                <Route path="order-complete" element={<Cart />} />
              </Route>
            </Route>
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <div className="w-full flex flex-col min-h-screen">
//       {/* Navbar */}
//       <Navbar />

//       {/* Main content area */}
//       <main className="flex-grow">
//         <Outlet />
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// }

