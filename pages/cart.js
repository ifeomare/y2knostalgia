import React from "react";
const Cart = ({ closeModal, ...props }) => {
  console.log("we went through cart", closeModal, props);

  // Add your cart rendering logic here
  return (
    <>
      <p>Cart component is rendered</p>
      {/* ... rest of your code ... */}
    </>
  );
};

export default Cart;
// import React, { useState } from "react";
// import CartProducts from "../src/components/cart-products";
// import "../styles/cart.css";

// // const Cart = ({ closeModal, ...props }) => {
// //   return <>{console.log("we went through cart", closeModal, props)}</>;
// // };
// const Cart = (closeModal, props) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = () => {
//     setCart([...cart, props]);
//   };

//   const renderCart = () => {
//     return (
//       <article className="cart-overlay">
//         <span id="x" onClick={closeModal}>
//           &#10006;
//         </span>
//         {cart.length > 0 ? (
//           <h2>You have {cart.length} props in your garage.</h2>
//         ) : (
//           <h2>You have 0 props in your garage.</h2>
//         )}
//       </article>
//     );
//   };

//   return (
//     <>
//       {/* {console.log("we went through cart")}
//       {typeof props == "undefined"
//         ? renderCart()
//         : console.log("this is weird")} */}
//         {renderCart()}
//     </>
//   );
// };

// export default Cart;
/* if nothing is being passed to cart - it should be visible;
if something is being passed to cart, it should not be visible and it should also be passed to cartProducts */
/* onclick - modal should close
 */
