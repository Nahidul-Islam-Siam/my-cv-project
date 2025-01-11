// import { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Menu,
//   MenuItem,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Collapse,
//   useMediaQuery,
// } from "@mui/material";
// import { FaSearch, FaUserCircle, FaShoppingBag } from "react-icons/fa";
// import { MdKeyboardArrowDown, MdMenu, MdExpandLess, MdExpandMore } from "react-icons/md";
// import { Link, useLocation } from "react-router-dom";
// import { useTheme } from "@mui/material/styles";

// const Navbar = () => {
//   const [anchorEl, setAnchorEl] = useState(null); // For desktop dropdowns
//   const [drawerOpen, setDrawerOpen] = useState(false); // For mobile drawer
//   const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
//     shop: false,
//     product: false,
//   }); // For mobile dropdowns

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect mobile screen
//   const location = useLocation(); // Get the current route

//   // Determine navbar background color based on the route
//   const navbarBackgroundColor = location.pathname === "/" ? "#FFC95B" : "white";

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const toggleDrawer = (open) => (event) => {
//     if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const handleMobileDropdownToggle = (menu) => {
//     setMobileDropdownOpen((prev) => ({
//       ...prev,
//       [menu]: !prev[menu],
//     }));
//   };

//   return (
//     <AppBar position="static"  style={{ backgroundColor: navbarBackgroundColor, boxShadow: "none", paddingRight: "50px", paddingLeft: "50px" }}>
//       <Toolbar style={{ justifyContent: "space-between", alignItems: "center" }}>
//         {/* Logo */}
//         <Typography
//           variant="h6"
//           component={Link}
//           to="/"
//           style={{
//             fontSize: "24px",
//             fontFamily: "Inter, serif",
//             color: location.pathname === "/" ? "black" : "#333",
//             textDecoration: "none",
           
//           }}
//         >
//           3legant.
//         </Typography>

//         {/* Desktop Navigation */}
//         {!isMobile && (
//           <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", fontSize: "14px" }}>
//             <Typography
//               component={Link}
//               to="/"
//               variant="body1"
//               style={{
//                 cursor: "pointer",
//                 color: location.pathname === "/" ? "black" : "#333",
//                 textDecoration: "none",
//               }}
//             >
//               Home
//             </Typography>
//             <Typography
//   variant="body1"
//       component={Link}
//               to="/shop"
//   onClick={handleMenuOpen}
//   style={{
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     gap: "0.2rem",
//     color: location.pathname === "/" ? "black" : "#333",
//   }}
//   aria-controls={anchorEl ? "shop-menu" : undefined}
//   aria-haspopup="true"
//   aria-expanded={Boolean(anchorEl)}
// >
//   Shop <MdKeyboardArrowDown />
// </Typography>
//             <Typography
//                component={Link}
//               to="/product"
//               variant="body1"
           
//               onClick={handleMenuOpen}
//               style={{
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "0.2rem",
//                 color: location.pathname === "/" ? "black" : "#333",
//               }}
//             >
//               Product <MdKeyboardArrowDown />
//             </Typography>
//             <Typography
//               component={Link}
//               to="/contact"
//               variant="body1"
//               style={{
//                 cursor: "pointer",
//                 color: location.pathname === "/" ? "black" : "#333",
//                 textDecoration: "none",
//               }}
//             >
//               Contact Us
//             </Typography>
//           </div>
//         )}

//         {/* Icons */}
//         <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
//           <IconButton>
//             <FaSearch style={{ color: location.pathname === "/" ? "black" : "#333" }} />
//           </IconButton>
//           <IconButton>
//             <FaUserCircle style={{ color: location.pathname === "/" ? "black" : "#333" }} />
//           </IconButton>
//           <IconButton>
//             <FaShoppingBag style={{ color: location.pathname === "/" ? "black" : "#333" }} />
//           </IconButton>

//           {/* Mobile Menu Button */}
//           {isMobile && (
//             <IconButton onClick={toggleDrawer(true)}>
//               <MdMenu style={{ color: location.pathname === "/" ? "black" : "#333" }} />
//             </IconButton>
//           )}
//         </div>
//       </Toolbar>

//       {/* Dropdown Menu for Desktop */}
//       <Menu
//   id="shop-menu"
//   anchorEl={anchorEl}
//   open={Boolean(anchorEl)}
//   onClose={handleMenuClose}
//   anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//   transformOrigin={{ vertical: "top", horizontal: "left" }}
// >
//   <MenuItem component={Link} to="/shop/category1" onClick={handleMenuClose}>
//     Shop Category 1
//   </MenuItem>
//   <MenuItem component={Link} to="/shop/category2" onClick={handleMenuClose}>
//     Shop Category 2
//   </MenuItem>
// </Menu>
//       {/* Mobile Drawer */}
//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <List
//           style={{ width: "250px" }}
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//         >
//           <ListItem button component={Link} to="/">
//             <ListItemText primary="Home" style={{ color: "black" }} />
//           </ListItem>
//           <ListItem button onClick={() => handleMobileDropdownToggle("shop")}>
//             <ListItemText primary="Shop" style={{ color: "black" }} />
//             {mobileDropdownOpen.shop ? (
//               <MdExpandLess style={{ color: "black" }} />
//             ) : (
//               <MdExpandMore style={{ color: "black" }} />
//             )}
//           </ListItem>
//           <Collapse in={mobileDropdownOpen.shop} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               <ListItem button component={Link} to="/shop/category1" style={{ paddingLeft: "2rem" }}>
//                 <ListItemText primary="Shop Category 1" style={{ color: "black" }} />
//               </ListItem>
//               <ListItem button component={Link} to="/shop/category2" style={{ paddingLeft: "2rem" }}>
//                 <ListItemText primary="Shop Category 2" style={{ color: "black" }} />
//               </ListItem>
//             </List>
//           </Collapse>
//           <ListItem button onClick={() => handleMobileDropdownToggle("product")}>
//             <ListItemText primary="Product" style={{ color: "black" }} />
//             {mobileDropdownOpen.product ? (
//               <MdExpandLess style={{ color: "black" }} />
//             ) : (
//               <MdExpandMore style={{ color: "black" }} />
//             )}
//           </ListItem>
//           <Collapse in={mobileDropdownOpen.product} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding>
//               <ListItem button component={Link} to="/product/category1" style={{ paddingLeft: "2rem" }}>
//                 <ListItemText primary="Product Category 1" style={{ color: "black" }} />
//               </ListItem>
//               <ListItem button component={Link} to="/product/category2" style={{ paddingLeft: "2rem" }}>
//                 <ListItemText primary="Product Category 2" style={{ color: "black" }} />
//               </ListItem>
//             </List>
//           </Collapse>
//           <ListItem button component={Link} to="/contact">
//             <ListItemText primary="Contact Us" style={{ color: "black" }} />
//           </ListItem>
//         </List>
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { cn } from '../lib/utils'

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons"; // Replace with appropriate icons or use react-icons
import { Link, useLocation } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const navbarBackgroundColor = isHomePage ? "bg-yellow-300" : "bg-white";

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-10 transition-colors duration-300",
        navbarBackgroundColor
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-black">
          3legant.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={cn(
              "text-gray-800 hover:text-black",
              isActive("/") && "font-bold text-black"
            )}
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center text-gray-800 hover:text-black"
                aria-expanded={activeSubmenu === "shop"}
                aria-label="Toggle Shop Menu"
              >
                Shop <Icons.chevronDown className="ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/shop/category1">Shop Category 1</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/shop/category2">Shop Category 2</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center text-gray-800 hover:text-black"
                aria-expanded={activeSubmenu === "product"}
                aria-label="Toggle Product Menu"
              >
                Product <Icons.chevronDown className="ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link to="/product/category1">Product Category 1</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/product/category2">Product Category 2</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            to="/contact"
            className={cn(
              "text-gray-800 hover:text-black",
              isActive("/contact") && "font-bold text-black"
            )}
          >
            Contact Us
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost">
            <Icons.search className="text-gray-800" />
          </Button>
          <Button variant="ghost">
            <Icons.user className="text-gray-800" />
          </Button>
          <Button variant="ghost">
            <Icons.shoppingBag className="text-gray-800" />
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Mobile Menu"
          >
            <Icons.menu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="space-y-2 p-4">
            <Link
              to="/"
              className={cn(
                "block text-gray-800 hover:text-black",
                isActive("/") && "font-bold text-black"
              )}
            >
              Home
            </Link>
            <div>
              <button
                className="w-full flex justify-between text-gray-800 hover:text-black"
                onClick={() => toggleSubmenu("shop")}
              >
                Shop <Icons.chevronDown />
              </button>
              {activeSubmenu === "shop" && (
                <div className="pl-4 space-y-2">
                  <Link
                    to="/shop/category1"
                    className="block text-gray-600 hover:text-black"
                  >
                    Shop Category 1
                  </Link>
                  <Link
                    to="/shop/category2"
                    className="block text-gray-600 hover:text-black"
                  >
                    Shop Category 2
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button
                className="w-full flex justify-between text-gray-800 hover:text-black"
                onClick={() => toggleSubmenu("product")}
              >
                Product <Icons.chevronDown />
              </button>
              {activeSubmenu === "product" && (
                <div className="pl-4 space-y-2">
                  <Link
                    to="/product/category1"
                    className="block text-gray-600 hover:text-black"
                  >
                    Product Category 1
                  </Link>
                  <Link
                    to="/product/category2"
                    className="block text-gray-600 hover:text-black"
                  >
                    Product Category 2
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className={cn(
                "block text-gray-800 hover:text-black",
                isActive("/contact") && "font-bold text-black"
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
