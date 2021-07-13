import React, { useState } from 'react'
import { connect } from "react-redux"
function Cart(props) {
    // const [bat, setBat] = useState(5);
    const {cart} = props
    return (
        <div>
            <h1>Number of Item in cart : {props.cart.length}</h1>
            
        </div>
    )
}
// 5 -> provide state variables from store
const mapStateToProps = store => {
    console.log("in map state to prop", store);
    // state variables change  
    return store.Cart;
}
// dispatch action provide to reducer
const mapDispatchtoProps = dispatch => {
    //    action
    // handler function 
    return {
       addItem : (val) => {
            dispatch({
                type: "add_to_cart",
                // data send to reducer function 
                payload: val
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Cart)