import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";



import Shop from "./pages/Shop";

import Cart from "./components/cartPage/Cart";
import Home from "./pages/Home";

import  MiniDrawer from "./components/admin/Das";
import Account from "./components/admin/Account";

import FrontLayout from "./layout/FrontLayout";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";

import CartStepper from "./components/cartPage/CartStepper";
import StylishTravelBags from "./components/BlogPage/Blogs";



function App() {
  return (
    <BrowserRouter>
      <div className="w-full flex flex-col min-h-screen bg-lightBackground dark:bg-darkBackground">
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>

            {/* admin dashboard */}
         
            <Route path="dashboard" element={<MiniDrawer />}>
              <Route index path="account" element={<Account />} />
      
           
            </Route>

            {/* Frontend Routes */}
            <Route path="/" element={< FrontLayout/>}>
              <Route index element={<Home />} />
              {/* <Route path="account" element={<Account />} /> */}
              <Route path="shop" element={<Shop />} />
              <Route path="/product" element={<Product/>} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blogs" element={<StylishTravelBags />} />
              <Route path="cartpage" element={<CartStepper />}>
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Cart />} />
                <Route path="order-complete" element={<Cart />} />
              </Route>
            </Route>
          </Routes>
        </main>

      
      </div>
    </BrowserRouter>
  );
}

export default App;

