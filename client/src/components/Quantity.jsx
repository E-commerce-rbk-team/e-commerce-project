import React from 'react';
import { FormControl, FormLabel, Input, InputAdornment } from '@mui/material';

const QuantitySelector = () => {
  const [quantity, setQuantity] = React.useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <FormControl >
      <FormLabel component="legend" sx={{ color: 'Black',fontSize: '18px',fontWeight: 'bold', marginBottom: '8px',position:"absolute",top:"-430px",right:"-780px" }}>Select Quantity</FormLabel>
      <Input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        sx={{ color: 'Black', marginBottom: '8px',position:"absolute",top:"-390px",right:"-740px" }}
        inputProps={{ min: 1, max: 10 }}
        startAdornment={<InputAdornment position="start"></InputAdornment>}
      />
    </FormControl>
  );
};

export default QuantitySelector;
