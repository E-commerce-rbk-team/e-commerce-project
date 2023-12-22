import React, { useState } from 'react';
import { Button } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const AddToCartButton = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
<Button
        variant="contained"
        color="primary"
        startIcon={<AddShoppingCart />}
        onClick={handleButtonClick}
        sx={{
          backgroundColor: '#DB4444',
          color: '#fff',
          position:'relative',
          top: -395,
          right: -780,
          '&:hover': {
            backgroundColor: '#DB4444',
          },
        }}
      >
        Add to Cart
      </Button>
      <Stack
        sx={{
          width: '100%',
          position: 'absolute',
          bottom: '310px', 
          right: '-1000px', 
          zIndex: 9999, 
        }}
        spacing={2}
      >
        {showAlert && (
          <Alert
            severity="success"
            onClose={handleCloseAlert}
            sx={{
              width: '300px', 
            }}
          >
            <AlertTitle>Success</AlertTitle>
            Item added to cart!
          </Alert>
        )}
      </Stack>
    </>
  );
};

export default AddToCartButton;
