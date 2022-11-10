import { useEffect } from "react";
import { data } from "../utility/products";

export const Cart = ({ cart, setCart }) => {

    return (

        data.filter((el) => {
            cart.filter((element) => {
                if(element == el.id) {
                    console.log(el)
                    return (
                        <div>

                        
                        <h1> {el} </h1>
                        </div>
                        )
                    }
                })
            })
        
        )
};
