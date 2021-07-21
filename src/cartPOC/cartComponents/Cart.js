import React, { useState } from "react";
import { connect } from "react-redux";
function Cart(props) {
  // const [bat, setBat] = useState(5);
  const { cart } = props;
  let product = [];

  console.log(cart);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "100%" }}>
        {cart.map((product) => {
          return (
            <div
              style={{
                display: "flex",
                width: "80%",
                borderBottom: "2px solid",
              }}
            >
              <div>
                <img
                  src={product.image}
                  style={{ height: "300px", width: "300px" }}
                ></img>
              </div>
              <div style={{ paddingLeft: 30 }}>
                <h4>{product.title}</h4>

                <div className="itemQuantity" style={{display:"flex"}}>
                  <button onClick={() => {props.decreaseQty(product)}}>-</button>
                  <div style={{width:"30px" , border:"1px solid" , textAlign:"center" }}>  {product.qty}   </div>
                  <button onClick={() => {props.increaseQty(product)}}>+</button>
                </div>
                <p>{product.description}</p>

                <div style={{ display: "flex", paddingLeft: 10 }}>
                  <button
                    onClick={() => {
                      props.deleteItem(product);
                    }}
                  >
                    delete
                  </button>
                  <span style={{ display: "flex", paddingLeft: 20 }}>
                    <strong>$</strong>
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h4>Cart Summary</h4>
        <span>SubTotal:</span>
      </div>
    </div>
  );
}
// 5 -> provide state variables from store
const mapStateToProps = (store) => {
  console.log("in map state to prop", store);
  // state variables change
  return store.Cart;
};
// dispatch action provide to reducer
const mapDispatchtoProps = (dispatch) => {
  //    action
  // handler function
  return {
    addItem: (obj) => {
      dispatch({
        type: "add_to_cart",
        // data send to reducer function
        payload: obj,
      });
    },
    deleteItem: (obj) => {
      dispatch({
        type: "delete_from_cart",
        payload: obj,
      });
    },
    increaseQty: (obj) =>{
      dispatch({
        type:"increase_qty",
        payload:obj,
      })
    },
    decreaseQty: (obj) => {
      dispatch({
        type:"decrease_qty",
        payload:obj
      })
    }
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(Cart);
