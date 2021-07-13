import Bat from './Component/Bat';
import { Provider } from "react-redux";
import store from './store';
import User from './Component/User';
import Ball from './Component/Ball';
import Cart from './Component/Cart.js';
import Home from './Component/Home';
import Product from './Component/Product'
import {BrowserRouter , Switch , Route} from "react-router-dom"
function App() {
  return (

    // 4
     // redux example
    // <Provider store={store}>
    //   <div className="App">
    //     <Ball></Ball>
    //     <Bat></Bat>
    //     <User></User>
    //   </div>
    // </Provider>
   <> 
   <Provider store={store}>
  <BrowserRouter>
  <Switch>
    <Route path="/cart" component={Cart}></Route>
    <Route path="/product" component={Product}></Route>
    <Route path="/" component={Home}></Route>
  </Switch>
  </BrowserRouter>
  </Provider>
    </>
  );
}
export default App;