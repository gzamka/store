// import { data } from "./products";
import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import { Explore, Shop, Cart, Favourite, Account , NotFound, NavigationWrapper} from './pages';

export const App = () => {

  const [cart, setCart ] = useState([0, 1, 1, 2, 3]);
  console.log(cart)
 
  return (
    
          <BrowserRouter>
            <Routes>
              
              <Route path='/' element={ <NavigationWrapper /> }>
                <Route path="" element={ <Navigate to='/shop' replace={true} />  } />
                <Route path='shop' element={ <Shop cart={cart} setCart={setCart} /> }/>
                <Route path='explore' element={ <Explore /> }/>
                <Route path='cart' element={ <Cart cart={cart} setCart={setCart} /> }/>
                <Route path='fav' element={ <Favourite /> }/>
                <Route path='acc' element={ <Account /> }/>
                <Route path='*' element={ <NotFound /> }/>  
              </Route>
      
            </Routes>
          </BrowserRouter>
      
  );
}