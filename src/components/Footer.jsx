import * as React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'; // Import React Icons

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        3legant
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '20vh',
        backgroundColor: '#121212',
        color: 'white',
        paddingY: 3,
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" component="h2" gutterBottom>
              3legant <Typography variant="body2" component="span" sx={{ color: 'grey' }}>Headphone Store</Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, gap: 2 }}>
              <Link href="#" color="inherit">Home</Link>
              <Link href="#" color="inherit">Shop</Link>
              <Link href="#" color="inherit">Product</Link>
              <Link href="#" color="inherit">Blog</Link>
              <Link href="#" color="inherit">Contact Us</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Copyright />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton href="#" sx={{ color: 'white' }}>
              <FaInstagram size={24} /> {/* Use React Icons with size prop */}
            </IconButton>
            <IconButton href="#" sx={{ color: 'white' }}>
              <FaFacebook size={24} />
            </IconButton>
            <IconButton href="#" sx={{ color: 'white' }}>
              <FaYoutube size={24} />
            </IconButton>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>Privacy Policy</Link>
            <Link href="#" color="inherit">Terms of Use</Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}