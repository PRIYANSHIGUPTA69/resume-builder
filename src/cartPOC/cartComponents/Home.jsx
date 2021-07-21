import React from 'react'
import {Link} from "react-router-dom"
import { products } from '../../data/data'
import { connect } from "react-redux"
import Product from './Product'
import cartReducer from '../cartRedux/cartReducer'
export  function Home(props) {
    const {cart} = props;
    return (
        <div style={{display:"flex"}}>
            <h4>{cart.length}</h4>
           {products.map(product =>  {
               return(
                   <div>
                   
                
                   <img src={product.image} style={{width:"300px",height:"200px"}}></img>
                   <h4>{product.title}</h4>
                   <div>{product.description}</div>
                   <h6>{product.price}</h6>
                   <div style={{display:"flex", justifyContent:"space-around"}}>
                      <Link to={`/product/:${product.id}`} state={product}>Details</Link>
                       <button onClick={()=>{props.addItem(product)}}>add</button>
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
       addItem : (obj) => {
            dispatch({
                type: "add_to_cart",
                // data send to reducer function 
                payload: obj
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Home)