import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../pages/cart";

import "../styles/nav.css";

const Nav = ({ cart }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/" className="nav-links">
            <img
              src="https://clipground.com/images/dj-silhouette-png-3.png"
              title="home"
            />
          </Link>
        </div>
        <div className="shop">
          <Link to="/shopping" className="nav-links">
            Shopping
          </Link>
        </div>
        <div className="about">
          <Link to="/contact" className="nav-links">
            Contact
          </Link>
        </div>
        <div className="search">
          <input className="search-box" type="text" placeholder="search" />
          <button className="search-btn">search</button>
        </div>
        <div className="wishlist">
          <Link to="/my-list" className="nav-links">
            &#10083;My List
          </Link>
        </div>
        <div className="account">
          <Link to="/account" className="nav-links">
            <img
              src="https://cdn0.iconfinder.com/data/icons/man-listening-to-music-with-earphone-headphone/258/listern-music-004-1024.png"
              title="Account"
            />
          </Link>
        </div>
        <div className="cart">
          <img
            src="https://th.bing.com/th/id/R.b4527066a1ea06a15a616e860a2be365?rik=Rniimu5in0E81A&riu=http%3a%2f%2fclipart-library.com%2fimg%2f1731409.png&ehk=m9zIlPmySYlC4dUSjeVpju94G%2f2U0U%2fv2jCx%2fM2vUxM%3d&risl=&pid=ImgRaw&r=0"
            title="My cart"
            onClick={() => setModal(true)}
          />
        </div>
      </nav>
      {modal && <Cart closeModal={setModal} props={null} cart={cart} />}
    </>
  );
};

export default Nav;
