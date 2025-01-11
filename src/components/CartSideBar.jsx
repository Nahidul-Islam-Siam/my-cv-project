import * as React from 'react';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 350, // Adjust width as needed
    padding: theme.spacing(2),
  },
}));

export default function CartSidebar() {
  const [open, setOpen] = React.useState(false);

  const cartItems = [
    { name: 'Tray Table (Black)', price: 19.19, quantity: 2, image: 'https://via.placeholder.com/50' }, // Replace with actual image URLs
    { name: 'Tray Table (Red)', price: 19.19, quantity: 2, image: 'https://via.placeholder.com/50' },
    { name: 'Table Lamp (Gold)', price: 39.00, quantity: 2, image: 'https://via.placeholder.com/50' },
  ];

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    // Add tax, shipping, etc. here if needed
    return calculateSubtotal() * 2.34; // Placeholder for total calculation
  };

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  return (
    <div>
      <IconButton color="inherit" onClick={toggleDrawer(true)}>
        <ShoppingCartIcon />
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
                  <Grid item xs={2} sx={{textAlign:"right"}}>
                    <IconButton size="small" aria-label="remove item">
                        <CloseIcon fontSize="small"/>
                    </IconButton>
                  </Grid>
                </Grid>
              </ListItem>
              {index < cartItems.length - 1 && <Divider />} {/* Add divider between items */}
            </React.Fragment>
          ))}
        </List>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mt: 'auto' }}> {/* Positions the subtotal/total at the bottom */}
          <Typography variant="subtitle1" sx={{mb:1}}>Subtotal: ${calculateSubtotal().toFixed(2)}</Typography>
          <Typography variant="h6">Total: ${calculateTotal().toFixed(2)}</Typography>
          <Button variant="contained" fullWidth sx={{ mt: 2 }}>
            Checkout
          </Button>
        </Box>
      </StyledDrawer>
    </div>
  );
}