import { ProductCard } from "../ProductCard";

export const Shop = ({cart, setCart}) => {

  console.log('shop', cart)
  return (
    
    // <div className="product-card">

      <ProductCard cart={cart} setCart={setCart} />

    // </div> 
  ) 
};
