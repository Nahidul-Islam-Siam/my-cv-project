import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import {
  MdDashboard,
  MdInbox,
  MdPeople,
  MdShoppingCart,
  MdLogin,
  MdPersonAdd,
} from "react-icons/md";
import { BiTask } from "react-icons/bi";

// Sidebar Menu Item Component
const MenuItem = ({ icon: Icon, label, badge, href = "#" }) => (
  <a
    href={href}
    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
  >
    <Icon className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
    <span className="ms-3 flex-1 whitespace-nowrap">{label}</span>
    {badge && (
      <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
        {badge}
      </span>
    )}
  </a>
);

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
        <div className="relative inline-flex items-center justify-center w-52 h-52 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
        </div>
        <h1 className="mb-10"></h1>
        <ul className="space-y-2 font-medium">
          <MenuItem icon={MdDashboard} label="Dashboard" />
          <MenuItem icon={BiTask} label="Kanban" badge="Pro" />
          <MenuItem icon={MdInbox} label="Inbox" badge="3" />
          <MenuItem icon={MdPeople} label="Users" />
          <MenuItem icon={MdShoppingCart} label="Products" />
          <MenuItem icon={MdLogin} label="Sign In" />
          <MenuItem icon={MdPersonAdd} label="Sign Up" />
        </ul>
      </div>
    </aside>
  </>
);

// Sidebar Toggle Button Component
const SidebarToggle = ({ toggleSidebar }) => (
  <button
    onClick={toggleSidebar}
    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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

  // Close sidebar on Esc key press
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
    <div className="flex relative">
        
      <SidebarToggle toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default AccountDashboard;
