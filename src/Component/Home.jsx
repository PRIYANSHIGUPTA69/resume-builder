import React from 'react'
import { products } from '../data/data'
import { connect } from "react-redux"
import Product from './Product'
import cartReducer from '../redux/Cart.js/cartReducer'
export  function Home(props) {
    const {cart} = props;
    return (
        <div style={{display:"flex"}}>
            <h4>{cart.length}</h4>
           {products.map(product =>  {
               return(
                   <div>
                   
                   <h4>{product.title}</h4>
                   <img src={product.image} style={{width:"100px",height:"100px"}}></img>
                   <p>{product.description}</p>
                   <div style={{display:"flex", justifyContent:"space-around"}}>
                       <h6>{product.price}</h6>
                       <button onClick={props.addItem}>add</button>
                   </div>
                   </div>
               )
           })}
        </div>
    )
}
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
export default connect(mapStateToProps, mapDispatchtoProps)(Home)