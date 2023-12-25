import React,{useContext} from 'react';
import { FormControl, FormLabel, Input, InputAdornment } from '@mui/material';
import { DataContext } from '../context.js'
const QuantitySelector = () => {
  const [quantiti, setQuantiti] = React.useState(1);
  const { setQuantity } = useContext(DataContext);
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= 10) {
      setQuantiti(newQuantity);
      setQuantity(quantiti)
    }
  };

  return (
    <FormControl >
      <FormLabel component="legend" sx={{ color: 'Black',fontSize: '18px',fontWeight: 'bold', marginBottom: '8px',position:"absolute",top:"-350px",right:"-780px" }}>Select Quantity</FormLabel>
      <Input
        type="number"
        value={quantiti}
        onChange={handleQuantityChange}
        sx={{ color: 'Black', marginBottom: '8px',position:"absolute",top:"-300px",right:"-740px" }}
        inputProps={{ min: 1, max: 10 }}
        startAdornment={<InputAdornment position="start"></InputAdornment>}
      />
    </FormControl>
  );
};

export default QuantitySelector;
