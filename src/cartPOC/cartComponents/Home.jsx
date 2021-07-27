import React from "react";
import { Link } from "react-router-dom";
import { products } from "../../data/data";
import { connect } from "react-redux";
import Product from "./Product";
import cartReducer from "../cartRedux/cartReducer";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./styling/HomePage.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    marginBottom: "5%",
    marginTop: "1%",
  },
  media: {
    height: "40vh",
  },
});
export function Home(props) {
  const { cart } = props;

  const classes = useStyles();
  return (
    <div style={{ display: "flex" }}>
      {products.map((product) => {
        return (
          <>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={product.image}
                title={product.title}
                style={{height:"300px"}}
              />
              <CardContent className={classes.cardstyle}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ height: "26vh" }}
                >
                  {product.description}
                </Typography>
                <br />
                <Typography variant="h5" align="center" color="textPrimary">
                  {product.price}&nbsp;₹
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/product/:${product.id}`} state={product}>
                  <Button size="small" color="primary">
                    View Item
                  </Button>
                </Link>

                <Button
                  size="small"
                  color="primary"
                  onClick={() => {
                    props.addItem(product);
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </>
        );
      })}
    </div>
  );
}
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
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(Home);
