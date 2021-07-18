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
            case "delete_from_cart":
                  let newCart = state.cart.filter(cart=>{
                       return cart.id != action.payload.id    
                    })
                return{
                    cart : newCart
                }
        default:
            return state;
    }
    // console.log("in store",action);
}
export default cartReducer