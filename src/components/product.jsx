import React from "react";
import "../../styles/product.css";
import Cart from "../../pages/cart.js";

const Product = (props) => {
  const addCartProduct = () => {
    console.log("onClick function has executed", props);
    return <Cart closeModal={null} {...props} />;
  };

  return (
    <>
      <div className="card">
        <div className="img-div">
          <div className="overlay">
            <button id="atc-button" onClick={addCartProduct}>
              Add to cart
            </button>
          </div>
          <img src={props.img} alt={props.img} />
        </div>

        <div className="footer">
          <h2 id="album"> {props.album} </h2>
          <div className="album-info">
            <h4 id="artist"> {props.artist} </h4>
            <h3 id="price"> {props.price} </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
