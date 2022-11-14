import * as React from 'react';
import Button from '@mui/material/Button';

export const AddButton = ({AddProduct}) => {
  
  return (
      <Button sx={{width: '30%', height: '50%'}} variant="contained" onClick={AddProduct} >add</Button>
      
  );
}
