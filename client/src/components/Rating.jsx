import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative',
        top: -670,
        right: -220,
      }}
    >
      <Rating name="read-only" value={value} readOnly max={4} /> 
    </Box>
  );
}
