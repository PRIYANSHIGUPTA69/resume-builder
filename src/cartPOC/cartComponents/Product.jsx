import React from 'react'
import {connect} from 'react-redux'
export function Product(props) {
     const {products} = props
     console.log(props)
    let producturl = props.match.params.id;
    console.log(producturl)
    let id = producturl.split(":")[1]
    
   let product = products.filter(p=>{
       return p.id==producturl
   })
   console.log(product)
    return (
        <div>
         {product.map(p=>{
             return(
                 <div style={{display:"flex"}}>
                     <div>
                         <img src={p.image} style={{height:"500px",width:"500px"}}></img>
                    </div>
                    
                    <div>
                        <h1>{p.title}</h1>
                        <span>M.R.P {p.price}</span>
                        <h6>Description</h6>
                        <div>{p.description}</div>

                        <button>add to cart</button>
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
export default connect(mapStateToProps, mapDispatchtoProps)(Product)