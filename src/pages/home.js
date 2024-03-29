import React, { useState } from "react";
import Product from "../components/product.jsx";

import "../styles/home.css";

const Home = ({ addToGlobalCart }) => {
  const [localCart, setLocalCart] = useState([]);

  const addToLocalCart = (product) => {
    setLocalCart([...localCart, product]);
    addToGlobalCart(product); // Add to the global cart as well
  };

  const [products] = useState([
    {
      img: "https://th.bing.com/th/id/OIP.khSBpwbt1AKdHEREMB-uCQHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7",
      artist: "Destiny's Child",
      album: "The Writing's On The Wall",
      price: "$10.99",
    },
    {
      img: "https://th.bing.com/th/id/OIP.NJgaYjZyYwdIIT7K6ZcEFwHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7",
      artist: "Jennifer Lopez",
      album: "J.Lo",
      price: "$10.99",
    },
    {
      img: "https://i.pinimg.com/474x/5a/65/00/5a650062049f361b70d85fe2170959c8--ciara-goodies-music-album-covers.jpg",
      artist: "Ciara",
      album: "Goodies",
      price: "$10.99",
    },
  ]);

  return (
    <>
      {/* {document.getElementById("atc-btn").addEventListener("click", console.log("this was clicked"))} */}
      <section className="home">
        <div className="shopping">
          <h1 id="section">Y2K Nostalgia</h1>
          <div className="products">
            {products.map((product) => (
              <Product
                addToLocalCart={addToLocalCart}
                {...product}
                key={product.album}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
