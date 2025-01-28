import React, { useContext, useState, useEffect } from 'react';
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
import CartContext from './Hooks/AddToCart';
import useProducts from './Hooks/AllProdutcs';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 350,
    padding: theme.spacing(2),
  },
}));

export default function CartSidebar() {
  const [open, setOpen] = useState(false);
  const { cart, dispatch } = useContext(CartContext);  
  const { products, error } = useProducts();  // Fetch products using custom hook

  const getProductPrice = (id) => {
    const product = products.find((product) => product.id === id);
    return product ? product.price : 0;
  };

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => {
      const price = getProductPrice(item.id);
      return sum + price * item.quantity;
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() * 1; // Placeholder for total calculation
  };

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });  // Dispatch action to remove item
  };

  // Filter products based on cart IDs
  const cartProducts = products.filter(product => cart.some(item => item.id === product.id));

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

        {error && <Typography color="error">Error: {error.message}</Typography>}
        
        <List>
          {cartProducts.map((item, index) => (
            <React.Fragment key={item.id}>
              <ListItem disableGutters>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={3}>
                    <CardMedia component="img" image={item.image} alt={item.name} sx={{ width: 50, height: 50 }} />
                  </Grid>
                  <Grid item xs={7}>
                    <ListItemText primary={item.name} secondary={`$${getProductPrice(item.id)} x ${cart.find(cartItem => cartItem.id === item.id).quantity}`} />
                  </Grid>
                  <Grid item xs={2} sx={{ textAlign: "right" }}>
                    <IconButton size="small" aria-label="remove item" onClick={() => removeItem(item.id)}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Grid>
                </Grid>
              </ListItem>
              {index < cartProducts.length - 1 && <Divider />}
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
