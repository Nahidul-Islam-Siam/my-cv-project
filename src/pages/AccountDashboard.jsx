import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FiMenu } from "react-icons/fi";
import avatar from "../assets/avatar.png";
import {
  MdAccountCircle,
  MdLocationOn,
  MdShoppingCart,
  MdFavorite,
  MdExitToApp,
  MdPersonAddAlt,
} from "react-icons/md";
import { Link } from "react-router-dom";

// Sidebar Menu Item Component
const MenuItem = ({ icon: Icon, label, badge, link }) => (
  <Link
    to={link}
    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
  >
    <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    <span className="ms-3 flex-1 whitespace-nowrap">{label}</span>
    {badge && (
      <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
        {badge}
      </span>
    )}
  </Link>
);
MenuItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  badge: PropTypes.string,
  link: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
  badge: null,
};

// Sidebar Component
// Sidebar Component
const Sidebar = ({ isOpen, closeSidebar }) => (
  <>
    {isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
        onClick={closeSidebar}
      ></div>
    )}
    <aside
      id="sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen bg-[#EBEEF1] dark:bg-gray-800 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <div className="text-center flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mx-auto mt-4">
          <img src={avatar} className="w-full h-full" alt="User Avatar" />
        </div>
        <h1 className="mb-8 mt-5 inter-font text-xl font-semibold text-center">Siam</h1>
        <ul className="space-y-2 font-medium">


          <MenuItem icon={MdLocationOn} label="Address" badge="Pro" link="/address" />
          <MenuItem icon={MdShoppingCart} label="Orders" badge="3" link="/orders" />
          <MenuItem icon={MdFavorite} label="Wishlist" link="/wishlist" />
          <MenuItem icon={MdExitToApp} label="Sign In" link="/signin" />
          <MenuItem icon={MdPersonAddAlt} label="Sign Up" link="/signup" />
        </ul>
      </div>


  </>
);


const SidebarToggle = ({ toggleSidebar }) => (
  <button
    onClick={toggleSidebar}
    className="fixed top-2 right-2 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-50"
    aria-controls="sidebar"
    aria-expanded="false"
  >
    <span className="sr-only">Open sidebar</span>
    <FiMenu className="w-6 h-6" />
  </button>
);

// Main Account Dashboard Component
const AccountDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex relative min-h-screen">
      <SidebarToggle toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default AccountDashboard;

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};


SidebarToggle.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};
