import { combineReducers } from "redux";
import BatReducer from "../../../redux/bat/batReducer";
import BallReducer from "../../../redux/ball/ballReducer";
import userReducer from "../../../redux/user/userReducer";
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