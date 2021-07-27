import React,{useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {connect} from "react-redux"
import cartReducer from '../cartRedux/cartReducer'
import "./styling/Navbar.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  
  title: {
    flexGrow: 1,
  },
  tool:{
      position:"relative"
  }
}));

 export function Appbar(props) {
  const {cart} = props;
  console.log(cart)
  const classes = useStyles();

  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);
  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor:'#badc58'}} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} style={{color:'#2f3542'}} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} style={{color:'#2f3542'}}>
            Shooping Cart
          </Typography>
          <Link to="/cart" color="#fff" style={{color:'#2f3542'}}>
          <Button color="inherit">
              Cart<ShoppingCartIcon style={{marginLeft:'12%', marginRight:'1%'}}/><span className='cartNumber' style={{}}>{cartCount}</span>
              </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
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
export default connect(mapStateToProps, mapDispatchtoProps)(Appbar)