import React from 'react';
import { Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h1">Heading 1</Typography>
<Typography variant="textPreset7">Navigation Item</Typography>
<Typography variant="textPreset9">Body Text</Typography>
    </Container>
  );
}

export default Home;
