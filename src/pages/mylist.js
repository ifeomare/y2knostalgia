import React, { useState } from "react";
import ListProduct from "../components/list-products";
import "../styles/mylist.css";
const Home = ({ list }) => {
  return (
    <>
      <section id="myList">
        <h1> My List </h1>
        <div className="header">
          {list.map((product) => (
            <ListProduct {...product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
