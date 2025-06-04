import React from 'react';
import { Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page!
      </Typography>
      <Typography variant="body1">
        This is a simple React + MUI homepage. You can customize it with your own text, layout, and components.
      </Typography>
    </Container>
  );
}

export default Home;
