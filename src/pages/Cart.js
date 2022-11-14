import { useEffect } from "react";
import { data } from "../utility/products";
import { ProductCard } from '../ProductCard'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../assets/style.css'
import { MyCard, AddButton, LongButton } from "../components";

export const Cart = ({ cart, setCart }) => {

    console.log(cart)
  return (
    <div>
    <h2> My cart </h2>
    {cart.map((el)=> {
            
            return (
              <div>

              <MyCard cart={cart} setCart={setCart} />
              </div>
        )
    })  
    }

    {(cart.length > 0) ? <LongButton/> : <h5> No products added </h5>  }
    
    </div>
  )

};
