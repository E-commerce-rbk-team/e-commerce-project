import React from 'react';
import "../css/Explore.css";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AllProd from "./AllProd.jsx"
const Arrivals = () => {
  const imageUrl = 'https://i.postimg.cc/XYqffsK3/Frame-622-1.png'; 

  return (
    <div className="imagee-containersss">
      <IconButton style={{ marginRight: '10px',position:'relative', top: '-70px', left: '1370px', }} >
        <ArrowBackIcon />
      </IconButton>
      <img src={imageUrl} alt="Image" />
      <IconButton style={{ marginRight: '10px',position:'relative', top: '-70px', left: '950px', }} >
        <ArrowForwardIcon />
      </IconButton>
      <AllProd/>

    </div>
  );
};

export default Arrivals;
  