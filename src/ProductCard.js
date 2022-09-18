import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const ProductCard = ({data}) => {

  
  return (
    
    data.map((el)=> {

      return(

       

    <Card key={el.id}  sx={{ maxWidth: 345, height: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={el.image}
                />
              
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {el.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
    </Card>
        
    
    )
    })
  );
}
