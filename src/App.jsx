import { Outlet } from "react-router";
import "./App.css";
import AnnouncedBar from "./components/AnnouncedBar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-container mx-auto max-w-full overflow-hidden">
      {/* Add the announcement bar if needed */}
      {/* <AnnouncedBar /> */}
      <Navbar />
      {/* Outlet for nested routing */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
