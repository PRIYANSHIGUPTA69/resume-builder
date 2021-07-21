import React from 'react'
import { Provider } from "react-redux";
import store from './app/store';
import Cart from './cartComponents/Cart'
import Home from './cartComponents/Home';
import Product from './cartComponents/Product'
import {BrowserRouter , Switch , Route} from "react-router-dom"

import Appbar from './cartComponents/Appbar';
export default function Ecommerce() {
    return (
        <div>
            <Provider store={store}>
  <BrowserRouter>
  <Appbar></Appbar>
  <Switch>
  <Route path="/product/:id" component={Product} ></Route>
    <Route path="/cart" component={Cart}></Route>
   
    <Route path="/" component={Home}></Route>
  </Switch>
  </BrowserRouter>
  </Provider>
        </div>
    )
}