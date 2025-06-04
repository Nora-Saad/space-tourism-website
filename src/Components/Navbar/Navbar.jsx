import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          top: '18px',
          backgroundColor: 'rgba(75, 102, 235, 0.9)'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              My Website
            </Typography>
            <Box>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}

export default Navbar;
