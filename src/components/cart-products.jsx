import React from "react";
import "../styles/cart-products.css";

const CartProducts = (prop) => {
  return (
    <>
      <section className="cartprod">
        <div className="cart-img">
          <img src={prop.img} alt={prop.img} />
        </div>
        <section className="info">
          <div className="album">
            <span>
              <b>{prop.album}</b>
            </span>
          </div>
          <div className="artist">
            <span>
              <b>{prop.artist}</b>
            </span>
          </div>
          <div className="pricing">
            <span>Qty: 1</span>
            <span>{prop.price}</span>
          </div>
          <div className="shipping">
            <span>
              <b>FREE SHIPPING</b>
            </span>
          </div>
        </section>
      </section>
      <hr />
    </>
  );
};

export default CartProducts;
