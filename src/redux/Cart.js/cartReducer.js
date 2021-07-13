let initialState = {
    cart: []
}
function cartReducer(state = initialState,
    action) {
    // update 
    // nothing
    // n  types of changes 
    // state change logic
    console.log(state);
    switch (action.type) {
        case "add_to_cart":
            // store update 
            return {
               ...state,
                cart: [...state.cart, action.payload]
            };
       
        default:
            return state;
    }
    // console.log("in store",action);
}
export default cartReducer