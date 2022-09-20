// import { data } from "./products";
import * as React from 'react';
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import { Explore, Shop, Cart, Favourite, Account , NotFound, NavigationWrapper} from './pages';

export const App = () => {
  return (
    
          <BrowserRouter>
            <Routes>
              <Route path='/' element={ <NavigationWrapper /> }>
                <Route path="" element={ <Navigate to='/shop' replace={true} />  } />
                <Route path='shop' element={ <Shop /> }/>
                <Route path='explore' element={ <Explore /> }/>
                <Route path='cart' element={ <Cart /> }/>
                <Route path='fav' element={ <Favourite /> }/>
                <Route path='acc' element={ <Account /> }/>
                <Route path='*' element={ <NotFound /> }/>  
              </Route>
      
            </Routes>
          </BrowserRouter>
      
  );
}

export const Appjs = () => {
  <>
    <ui>
      <li>
        <Link to='/shop'> Shop </Link>
        <Link to='/explore'> Explore </Link>
        <Link to='/cart'> Cart </Link>
        <Link to='/fav'> Favourite </Link>
        <Link to='/acc'> Account </Link>
      </li>
    </ui>
  </>
}