// CartSidebar.js
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { FaShoppingCart } from "react-icons/fa";
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import p1 from '../assets/short1.png'
import p2 from '../assets/short2.png'


const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 350,
    padding: theme.spacing(2),
  },
}));

export default function CartSidebar() {
  const [open, setOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([
    { name: 'Tray Table (Black)', price: 19.19, quantity: 2, image: p1 },
    { name: 'Tray Table (Red)', price: 19.19, quantity: 2, image: p2 },
    { name: 'Table Lamp (Gold)', price: 39.00, quantity: 2, image: p1 },
  ]);

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() * 2.34; // Placeholder for total calculation
  };

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const removeItem = (index) => {
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <IconButton color="inherit" onClick={toggleDrawer(true)}>
        <FaShoppingCart color="black" />
      </IconButton>
      <StyledDrawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">Cart</Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {cartItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem disableGutters>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={3}>
                    <CardMedia component="img" image={item.image} alt={item.name} sx={{ width: 50, height: 50 }} />
                  </Grid>
                  <Grid item xs={7}>
                    <ListItemText primary={item.name} secondary={`$${item.price} x ${item.quantity}`} />
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: "right" }}>
                    <IconButton size="small" aria-label="remove item" onClick={() => removeItem(index)}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Grid>
                </Grid>
              </ListItem>
              {index < cartItems.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mt: 'auto' }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Subtotal: ${calculateSubtotal().toFixed(2)}</Typography>
          <Typography variant="h6">Total: ${calculateTotal().toFixed(2)}</Typography>
          <Button variant="contained" fullWidth sx={{ mt: 2 }} component="a" href="/cartpage">
            Checkout
          </Button>
        </Box>
      </StyledDrawer>
    </div>
  );
}
