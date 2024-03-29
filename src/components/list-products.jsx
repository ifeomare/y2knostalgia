import React from "react";
import "../styles/list-products.css";

const ListProduct = ({ ...props }) => {
  return (
    <>
      <section className="mylist">
        <div className="card">
          <div className="img-div">
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
      </section>
    </>
  );
};

export default ListProduct;
