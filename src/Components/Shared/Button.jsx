import React from 'react';
import { Button, Typography } from '@mui/material';

const CircleButton = ({ children, onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: {
            xs: '180px',
            sm: '230px',
            md: '300px',
          },
          height: {
            xs: '180px',
            sm: '230px',
            md: '300px',
          },
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        color: '#0B0D17', 
        textTransform: 'uppercase',
        padding: 0,
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: 'Bellefair, serif' }}>
        {children}
      </Typography>
    </Button>
  );
};

export default CircleButton;
