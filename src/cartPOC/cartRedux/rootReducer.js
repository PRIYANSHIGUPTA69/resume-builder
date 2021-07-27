import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
// console.log("root Reducer");
// merged store
const rootReducer = combineReducers({
    //Ball: BallReducer,
   // Bat: BatReducer,
   // User: userReducer,
    Cart:cartReducer
});
export default rootReducer;