import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  useMediaQuery,
} from "@mui/material";
import { FaSearch, FaUserCircle, FaShoppingBag } from "react-icons/fa";
import { MdKeyboardArrowDown, MdMenu, MdExpandLess, MdExpandMore } from "react-icons/md";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // For desktop dropdowns
  const [drawerOpen, setDrawerOpen] = useState(false); // For mobile drawer
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    shop: false,
    product: false,
  }); // For mobile dropdowns

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect mobile screen

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMobileDropdownToggle = (menu) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#FFC95B", boxShadow: "none" }}>
      <Toolbar style={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          style={{ fontSize: "24px", fontFamily: "Inter, serif", color: "black" }}
        >
          3legant.
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" , fontSize:'14px'}}>
            <Typography
              variant="body1"
              component="div"
              style={{ cursor: "pointer", color: "black" }}
            >
              Home
            </Typography>
            <Typography
              variant="body1"
              component="div"
              onClick={handleMenuOpen}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.2rem",
                color: "black",
              }}
            >
              Shop <MdKeyboardArrowDown style={{ color: "black" }} />
            </Typography>
            <Typography
              variant="body1"
              component="div"
              onClick={handleMenuOpen}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.2rem",
                color: "black",
              }}
            >
              Product <MdKeyboardArrowDown style={{ color: "black" }} />
            </Typography>
            <Typography
              variant="body1"
              component="div"
              style={{ cursor: "pointer", color: "black" }}
            >
              Contact Us
            </Typography>
          </div>
        )}

        {/* Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <IconButton color="inherit">
            <FaSearch style={{ color: "black" }} />
          </IconButton>
          <IconButton color="inherit">
            <FaUserCircle style={{ color: "black" }} />
          </IconButton>
          <IconButton color="inherit">
            <FaShoppingBag style={{ color: "black" }} />
          </IconButton>
          <Typography
            variant="body2"
            component="span"
            style={{
              fontWeight: "bold",
              color: "black",
              backgroundColor: "white",
              borderRadius: "50%",
              padding: "0.3rem",
            }}
          >
            2
          </Typography>

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MdMenu style={{ color: "black" }} />
            </IconButton>
          )}
        </div>
      </Toolbar>

      {/* Dropdown Menu for Desktop */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
      </Menu>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List
          style={{ width: "250px" }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <ListItem button>
            <ListItemText primary="Home" style={{ color: "black" }} />
          </ListItem>
          <ListItem button onClick={() => handleMobileDropdownToggle("shop")}>
            <ListItemText primary="Shop" style={{ color: "black" }} />
            {mobileDropdownOpen.shop ? (
              <MdExpandLess style={{ color: "black" }} />
            ) : (
              <MdExpandMore style={{ color: "black" }} />
            )}
          </ListItem>
          <Collapse in={mobileDropdownOpen.shop} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button style={{ paddingLeft: "2rem" }}>
                <ListItemText primary="Option 1" style={{ color: "black" }} />
              </ListItem>
              <ListItem button style={{ paddingLeft: "2rem" }}>
                <ListItemText primary="Option 2" style={{ color: "black" }} />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleMobileDropdownToggle("product")}>
            <ListItemText primary="Product" style={{ color: "black" }} />
            {mobileDropdownOpen.product ? (
              <MdExpandLess style={{ color: "black" }} />
            ) : (
              <MdExpandMore style={{ color: "black" }} />
            )}
          </ListItem>
          <Collapse in={mobileDropdownOpen.product} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button style={{ paddingLeft: "2rem" }}>
                <ListItemText primary="Option 1" style={{ color: "black" }} />
              </ListItem>
              <ListItem button style={{ paddingLeft: "2rem" }}>
                <ListItemText primary="Option 2" style={{ color: "black" }} />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button>
            <ListItemText primary="Contact Us" style={{ color: "black" }} />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
