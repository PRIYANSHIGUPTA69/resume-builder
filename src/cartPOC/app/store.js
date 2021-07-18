import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../cartRedux/Cart.js/rootReducer";
console.log("Hello")
const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log(store);
export default store;