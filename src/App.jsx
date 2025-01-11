import { Outlet } from "react-router";
import "./App.css";
// import AnnouncedBar from "./components/AnnouncedBar";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-auto">
      {/* Uncomment if needed */}
      {/* <AnnouncedBar /> */}

      {/* Navbar should take full width */}
      <Navbar />

      {/* Content area with max-width container */}
      <div className="">
        <Outlet /> {/* This renders the routed components */}
      </div>
      <Footer />  
    </div>
  );
}

export default App;
