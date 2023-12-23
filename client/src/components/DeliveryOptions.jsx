import React from 'react';
import { Box, IconButton, Typography, Stack } from '@mui/material';
import { LocalShipping, Undo } from '@mui/icons-material';

const DeliveryOptions = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
        padding: '12px',
        borderRadius: '4px',
        width: '250px',
        position:'relative',
        top: -420,
        right: -900,
      }}
    >
      <Stack direction="column" spacing={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton aria-label="Free Delivery" color="primary" sx={{ color: '#4CAF50' }}>
            <LocalShipping />
          </IconButton>
          <Stack direction="column" spacing={0}>
            <Typography variant="subtitle2">Free Delivery</Typography>
            <Typography variant="body2">Enter your postal code for Delivery Availability</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton aria-label="Return Delivery" color="primary" sx={{ color: '#F44336' }}>
            <Undo />
          </IconButton>
          <Stack direction="column" spacing={0}>
            <Typography variant="subtitle2">Return Delivery</Typography>
            <Typography variant="body2">Easy returns within 30 days!</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default DeliveryOptions;
