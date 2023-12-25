import React, { useState,useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from 'axios'
import { DataContext } from '../context.js'
const WishlistButton = ({dataUser}) => {
  const [showAlert, setShowAlert] = useState(false);
  const { oneProduct } = useContext(DataContext);
  const handleWishlistClick = () => {
    console.log("datauss",dataUser);
   axios.post("http://localhost:3000/api/addwish",{UserId:dataUser.id,ProductId:oneProduct.id})
   .then((res)=>setShowAlert(true))
   .catch((err)=>console.log(err))
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Box
        sx={{
          display: 'inline-block',
          backgroundColor: 'transparent',
          borderRadius: '10%',
          padding: '1px',
          position: 'relative',
          top: -395,
          right: -800,
          contentAlign: 'center',
          '&:hover': {
            backgroundColor: '#E0E0E0',
          },
        }}
      >
        <IconButton
          aria-label="Add to Wishlist"
          color="secondary"
          sx={{
            color: '#FF5722',
            
          }}
          onClick={handleWishlistClick}
        >
          <Favorite />
        </IconButton>
      </Box>
      <Stack sx={{ width: '300px', position: 'relative', top: '-655px', right: '-1000px', zIndex: 9999 }}>
        {showAlert && (
          <Alert severity="success" onClose={handleCloseAlert}>
            Item added to Wishlist!
          </Alert>
        )}
      </Stack>
    </>
  );
};

export default WishlistButton;
