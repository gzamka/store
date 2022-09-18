// import ReactDOM from "react-dom/client";
// import { Explore, Shop, Cart, Favourite, Account } from './pages';
// import { ProductCard } from './ProductCard'
// import { data } from "./products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Explore, Shop, Cart, Favourite, Account , NotFound} from './pages';



export const App = () => {
  return (
    
      
        // <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path='/' >
                <Route path="" element={ <Shop /> } />
                <Route path='explore' element={ <Explore /> }/>
                <Route path='cart' element={ <Cart /> }/>
                <Route path='fav' element={ <Favourite /> }/>
                <Route path='acc' element={ <Account /> }/>
              </Route>
      
              <Route path='*' element={ <NotFound /> }/>
      
      
            </Routes>
          </BrowserRouter>
        // </React.StrictMode>,
      
  );
}