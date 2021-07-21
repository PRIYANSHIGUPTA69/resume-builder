import {products} from '../../data/data'
let initialState = {
    products,
    cart: [],
    
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
          
            const item = state.products.find(
                (product) => product.id === action.payload.id
              );
              // Check if Item is in cart already
              const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
              );
        
              return {
                ...state,
                cart: inCart
                  ? state.cart.map((item) =>
                      item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                    )
                  : [...state.cart, { ...item, qty: 1 }],
              };
            case "delete_from_cart":
                  let newCart = state.cart.filter(cart=>{
                       return cart.id != action.payload.id    
                    })
                return{
                    cart : newCart
                };
            case "increase_qty":
              return {
                ...state,
                cart:state.cart.map((item) =>{
                 return item.id === action.payload.id ? { ...item, qty: item.qty + 1 }:item
                } )
                 
              };
              case "decrease_qty":
                return {
                  ...state,
                  cart:state.cart.map((item) =>{
                   return item.id === action.payload.id ?(item.qty>0? { ...item, qty: item.qty - 1 }:{...item,qty: item.qty}):item
                  } )
                   
                };

        default:
            return state;
    }
    // console.log("in store",action);
}
export default cartReducer