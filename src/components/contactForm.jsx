import React from "react";

const ContactForm = () => {
  return (
    <div className="contact">
      <h1>How Can We Get In Touch With You</h1>
      <form>
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
        <div className="concerns">
          <label>Comments or Concerns: </label>
          <input type="text" placeholder="How can we help?"></input>
          <input type="submit" value="Submit"></input>
        </div>
        <button id="form-btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
