import { Outlet } from "react-router";
import "./App.css";
import AnnouncedBar from "./components/AnnouncedBar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* Uncomment if needed */}
      {/* <AnnouncedBar /> */}

      {/* Navbar should take full width */}
      <Navbar />

      {/* Content area with max-width container */}
      <div className="">
        <Outlet /> {/* This renders the routed components */}
      </div>
    </div>
  );
}

export default App;
