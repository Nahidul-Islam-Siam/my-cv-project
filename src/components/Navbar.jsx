import { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import CartSidebar from "./CartSideBar";
import CartContext from "./Hooks/AddToCart";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // Mobile drawer state
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false); // Cart sidebar state
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect mobile screen
  const location = useLocation(); // Current route
  const navigate = useNavigate(); // For navigation


   const { cart } = useContext(CartContext); // Access cart state
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  
    
  // Determine navbar background color based on the route
  const navbarBackgroundColor = location.pathname === "/" ? "#FFC95B" : "white";

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setDrawerOpen(false); // Close drawer after navigating
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar
        position="static"
        className="shadow-none px-6"
        style={{
          backgroundColor: navbarBackgroundColor,
        }}
      >
        <Toolbar className="justify-between items-center">
          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            className={`text-lg font-bold ${location.pathname === "/" ? "text-black" : "text-gray-800"} no-underline`}
          >
            SAM FASHION
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-10 text-sm">
              <Typography
                component={Link}
                to="/"
                className={`cursor-pointer no-underline ${
                  location.pathname === "/" ? "text-black" : "text-gray-800"
                }`}
              >
                Home
              </Typography>
              <Typography
                component={Link}
                to="/shop"
                className={`cursor-pointer no-underline ${
                  location.pathname === "/" ? "text-black" : "text-gray-800"
                }`}
              >
                Shop
              </Typography>
              {/* <Typography
                component={Link}
                to="/product"
                className={`cursor-pointer no-underline ${
                  location.pathname === "/" ? "text-black" : "text-gray-800"
                }`}
              >
                Product
              </Typography> */}
              <Typography
                component={Link}
                to="/blog"
                className={`cursor-pointer no-underline ${
                  location.pathname === "/" ? "text-black" : "text-gray-800"
                }`}
              >
                Blog
              </Typography>
              <Typography
                component={Link}
                to="/contact"
                className={`cursor-pointer no-underline ${
                  location.pathname === "/" ? "text-black" : "text-gray-800"
                }`}
              >
                Contact Us
              </Typography>

            </div>
          )}

          <div className="flex items-center gap-4">
            {!isMobile && (
              <IconButton>
                <FaSearch className={location.pathname === "/" ? "text-black" : "text-gray-800"} />
              </IconButton>
            )}
            <IconButton
              onClick={() => {
                const isLoggedIn = true; // Replace with actual login check
                if (isLoggedIn) {
                  navigate("/dashboard");
                } else {
                  navigate("/login");
                }
              }}
            >
              <FaUserCircle className={location.pathname === "/" ? "text-black" : "text-gray-800"} />
            </IconButton>

            <div className="relative">
      <CartSidebar 
        className="relative" 
        open={cartSidebarOpen} 
        onClose={() => setCartSidebarOpen(false)} 
      />
      <span 
        className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"
      >
        {totalItems}
      </span>
    </div>

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton onClick={toggleDrawer(true)}>
                <MdMenu className={location.pathname === "/" ? "text-black" : "text-gray-800"} />
              </IconButton>
            )}
          </div>
        </Toolbar>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {drawerOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <div className="w-64 p-4 flex flex-col h-full">
                  {/* Search Bar */}
                  <div className="mb-4">
                    <TextField
                      variant="outlined"
                      placeholder="Search..."
                      fullWidth
                      slotProps={{
                        input: {
                          style: {
                            fontSize: "14px",
                          },
                        },
                      }}
                    />
                  </div>

                  {/* Navigation Links */}
                  <List>
                    <ListItem button onClick={() => handleLinkClick("/")}>
                      <ListItemText primary="Home" className="text-black" />
                    </ListItem>
                    <ListItem button onClick={() => handleLinkClick("/shop")}>
                      <ListItemText primary="Shop" className="text-black" />
                    </ListItem>
                    {/* <ListItem button onClick={() => handleLinkClick("/product")}>
                      <ListItemText primary="Product" className="text-black" />
                    </ListItem> */}
                    <ListItem button onClick={() => handleLinkClick("/contact")}>
                      <ListItemText primary="Contact Us" className="text-black" />
                    </ListItem>
                    <ListItem button onClick={() => handleLinkClick("/blog")}>
                      <ListItemText primary="Blog" className="text-black" />
                    </ListItem>
                  </List>

                  {/* Spacer */}
                  <div className="flex-grow"></div>

                  {/* Login Button */}
                  <Button
                    variant="contained"
                    onClick={() => handleLinkClick("/login")}
                    className="w-full bg-blue-500 text-white py-2"
                  >
                    Login
                  </Button>
                </div>
              </Drawer>
            </motion.div>
          )}
        </AnimatePresence>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;
