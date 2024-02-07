import React, { useState, useEffect } from "react";
import CartProducts from "../components/cart-products";
import "../styles/cart.css";

const Cart = ({ closeModal, props, cart }) => {
  // console.log("Cart component - cart:", cart);

  // const cartItems = cart ?? [0];

  return (
    <>
      {props === null ? (
        <article className="cart-overlay">
          <section className="header">
            <div className="cart">
              <img
                src="https://th.bing.com/th/id/R.b4527066a1ea06a15a616e860a2be365?rik=Rniimu5in0E81A&riu=http%3a%2f%2fclipart-library.com%2fimg%2f1731409.png&ehk=m9zIlPmySYlC4dUSjeVpju94G%2f2U0U%2fv2jCx%2fM2vUxM%3d&risl=&pid=ImgRaw&r=0"
                title="My cart"
              />
            </div>
            <h1>My Cart</h1>
            <span id="x" onClick={() => closeModal(false)}>
              &#10006;
            </span>
          </section>
          <hr />
          {/* if cart is not null and cart.length is 0, return empty */}
          <section className="userCart">
            {cart && cart.length > 0 ? (
              cart.map((product) => (
                <CartProducts {...product} key={product.album} />
              ))
            ) : (
              <span className="empty-cart">
                <h1 id="empty">Your Cart Is Empty</h1>
              </span>
            )}
          </section>
        </article>
      ) : (
        <h1>A product was added</h1>
      )}
    </>
  );
};

export default Cart;
/* if props is null - the popup window should be visible;
if props is not null, the popup window should not be visible and props should also be passed to cartProducts */
/* onclick - popup window should close
 */
