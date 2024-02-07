import React from "react";
import "../styles/product.css";
import Cart from "../pages/cart";

const Product = ({ addToLocalCart, addToLocalList, ...props }) => {
  const addCartProduct = () => {
    addToLocalCart(props);
  };

  const addListProduct = () => {
    addToLocalList(props);
    document.getElementById("atw-btn").style.color = "red";
  };

  return (
    <>
      <div className="card">
        <div className="img-div">
          <div className="overlay">
            <p id="atw-btn" onClick={addListProduct}>
              &#9825; Wishlist
            </p>
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
