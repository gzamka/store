// import { data } from "./products";
import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import { Explore, Shop, Cart, Favourite, Account , NotFound, NavigationWrapper} from './pages';

export const App = () => {

  const [add, setAdd ] = useState([0, 1]);
 
  return (
    
          <BrowserRouter>
            <Routes>
              
              <Route path='/' element={ <NavigationWrapper /> }>
                <Route path="" element={ <Navigate to='/shop' replace={true} />  } />
                <Route path='shop' element={ <Shop add={add} setAdd={setAdd} /> }/>
                <Route path='explore' element={ <Explore /> }/>
                <Route path='cart' element={ <Cart add={add} setAdd={setAdd} /> }/>
                <Route path='fav' element={ <Favourite /> }/>
                <Route path='acc' element={ <Account /> }/>
                <Route path='*' element={ <NotFound /> }/>  
              </Route>
      
            </Routes>
          </BrowserRouter>
      
  );
}