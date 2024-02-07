import React from "react";
import "../styles/account.css";

const Account = () => {
  return (
    <>
      <div className="accountpage">
        <h1>Sign Up</h1>
        <form>
          {/* <div className="name"> */}
          <div className="fname">
            <label>Full Name</label>
            <input
              type="text"
              class="fname"
              id="fname"
              name="firstname"
              placeholder="First name"
            ></input>
          </div>
          <div className="lname">
            <label>Last Name</label>
            <input
              type="text"
              class="lname"
              id="lname"
              name="lastlname"
              placeholder="Last name"
            ></input>
          </div>
          {/* </div> */}
          <div className="email">
            <label>Email</label>
            <input
              type="text"
              class="email"
              id="email"
              name="email"
              placeholder="Your email"
            ></input>
          </div>
          <button className="sign-up">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Account;
