import { useState } from "react";
import Home from "./pages/home";
import Cart from "./pages/cart";
import MyList from "./pages/mylist";
import Account from "./pages/account";
import Contact from "./pages/contact";
import Shopping from "./pages/shopping";

import NavBar from "./components/nav";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToGlobalCart = (product) => {
    setCart([...cart, product]);
  };

  const [list, setList] = useState([]);

  const addToGlobalList = (product) => {
    setList([...list, product]);
  };

  return (
    <BrowserRouter>
      <NavBar cart={cart} />

      <Routes>
        <Route
          exact
          path="/"
          element={<Home addToGlobalCart={addToGlobalCart} />}
        />
        <Route
          path="/home"
          element={<Home addToGlobalCart={addToGlobalCart} />}
        />
        <Route
          path="/shopping"
          element={
            <Shopping
              addToGlobalCart={addToGlobalCart}
              addToGlobalList={addToGlobalList}
            />
          }
        />
        <Route path="/account" element={<Account />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-list" element={<MyList list={list} />} />
      </Routes>
    </BrowserRouter>
  );
}
