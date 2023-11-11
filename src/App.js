import Home from "../pages/home";
import Cart from "../pages/cart";
import MyList from "../pages/mylist";
import Account from "../pages/account";
import Contact from "../pages/contact";
import Shopping from "../pages/shopping";

import NavBar from "/src/components/nav";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      {/* <div className="container"> */}
      <NavBar />
      {/* <Footer /> */}
      {/* </div> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/account" element={<Account />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-list" element={<MyList />} />
      </Routes>
    </BrowserRouter>
  );
}
