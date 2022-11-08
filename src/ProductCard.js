import * as React from 'react';
// import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { data } from './utility/products'
import './assets/style.css'
import AddButton from './components/AddButton';

export const ProductCard = ({add, setAdd}) => {
  
  return (

    
    data.map((el)=> {
      
      const AddProduct = () => {
        setAdd([...add, el.id]);
      }
      
      return(
              <div className="product-card" key={el.id+1}>

                <Card className='shop-card'   >
                          <CardActionArea>
                            <CardMedia className='shop-card-photo'
                          component="img"
                          image={el.image}    
                              />
                            <CardContent>
                              <Typography gutterBottom variant="h7" component="div">
                                {el.title}
                              </Typography>
                              {/* <Typography variant="body2" color="text.secondary">
                                {el.description}
                              </Typography> */}
                            </CardContent>
                            
                          </CardActionArea>

                          <div className='title-and-button' key={el.id}>              
                            <h4>${el.price} </h4>    
                            <AddButton AddProduct={AddProduct} />
                          </div>

                  </Card>
              </div> 
        
        )
      })
  )
}
