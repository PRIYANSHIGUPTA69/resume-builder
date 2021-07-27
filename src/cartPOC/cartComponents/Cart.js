import React, { useState , useEffect } from "react";
import { connect } from "react-redux";
import { coupons} from '../data/data';
import './styling/Cart.css'
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
function Cart(props) {
  // const [bat, setBat] = useState(5);
  const { cart } = props;
  const [item , setItem] = useState(0);
  const [price , setPrice] = useState(0);
  const [code , setCode] = useState("");
  const [oldPrice ,setoldPrice] = useState(0);
  const [loading , setLoading] = useState(true)
  
  const [success,setSuccess]=useState(null);
  const applyCoupan = ()=>
  {
    
    let couponm = code.trim().toUpperCase();
    console.log(coupons)
    let obj = coupons[couponm];;
    console.log(obj)
   
    if(obj==undefined)
    {
      console.log('Coupon is not applicable')
      setSuccess(false);
      setLoading(false);
    }
    else
    {
      console.log(obj.discount);
      setSuccess(true);
      setLoading(false);
      let discount = (price/100)*(obj.discount);
      let newPrice =parseInt(price-discount);
      setoldPrice(price);
      setPrice(newPrice);
    }
  }
  const tryAgain = ()=>{
    setSuccess(null);
    setLoading(true);
    setCode('');
  }
  const revert = () =>{
    setPrice(oldPrice);
    setoldPrice(null);
    setSuccess(null);
    setLoading(true);
    setCode('');
  }
  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setItem(items);
    setPrice(price);
    setoldPrice(price)
    console.log(cart)

  }, [cart]);
  return (
   <>
    {cart.length==0?<><h1>Your cart is empty</h1></>:
    <div style={{ display: "flex" }} className='container-div' >
     
      <div style={{ width: "80%" , marginRight:"2%"}} className='items'>
        <hr></hr>
        {cart.map((product) => {
          return (
            <div
           className= 'itemContainer'
           style={{display:"flex"}}
            >
              <div>
                <img
                  src={product.image}
                  style={{ height: "300px", width: "300px" }}
                ></img>
              </div>
              <div style={{ paddingLeft: 30 }} className='desc'>
              <div className='itemName'>
              <h4>{product.title}</h4>
            </div>
                

                <div className="itemQuantity" style={{display:"flex"}}>
                  <button onClick={() => {props.decreaseQty(product)}}>-</button>
                  <div style={{width:"30px" , border:"1px solid" , textAlign:"center" }}>  {product.qty}   </div>
                  <button onClick={() => {props.increaseQty(product)}}>+</button>
                </div>
                <div className='itemdesc'>
            <p style={{    color:'#222f3e', fontFamily: 'cursive', textAlign: 'justify'}} >{product.description}</p>
            </div>
            <div className='pc'>
            <Button variant="contained" color="secondary"
            onClick={() => {
            props.deleteItem(product);
          }}
        >
          <DeleteIcon/>Delete
        </Button>
            <h3 style={{marginTop: '1%', marginLeft: '4%'}}>₹ {product.price}</h3>
            </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='details-c'>
      <div className='details'>
     
        <h4 style={{textAlign:'center', paddingTop:'5%'}}>Cart Summary</h4>
        <div style={{textAlign:'center', marginBottom: '5%', marginTop:'5%'}}> <span>SubTotal( {item}): <strong>₹ {price}</strong></span></div>
        
        

        <>
          {loading==true?<div className='coupon'>
        <TextField value={code} style={{marginRight:'2%'}} id="standard-basic" label="Enter code" onChange={(e) =>{
          console.log(e.target.value)
          setCode(e.target.value)
        }} />
        <Button variant="outlined" size='small' onClick={applyCoupan}>
          Apply
        </Button></div> :<>
        {
        success==true?<div className='smsg'>
          <h4>Code applied !</h4>
          
          <div className='revert'>
          <Button onClick={revert} size='small' variant="contained" color="secondary"
        >
          Revert
        </Button>
          </div>
        </div>
        :<div className='fmsg'>
          <h4>Not valid !</h4>
          <div className='revert'>
        <Button  size='small' variant="contained" color="secondary" onClick={tryAgain}
        >
         Try Again
        </Button>
          </div>
        </div>
        
        }
        </>
}
        </>
        <div className='checkout'>
        <Button variant="contained" color="primary">
          Proceed To Buy
        </Button>
        
        </div>
        
      </div>
      </div>
}
    </div>
    }
    </>
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
