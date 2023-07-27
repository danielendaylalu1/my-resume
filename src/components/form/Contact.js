import React from "react";

function Contact() {
  return (
    <div className="card">
      <h2>Contact</h2>
      <label className="label" htmlFor="phone">
        Phone
      </label>
      <input
        placeholder="+251-968-**-**"
        id="phone"
        className="input"
        name="phone"
        type="tel"
      />
      <label className="label" htmlFor="email">
        email
      </label>
      <input
        placeholder="example@gmail.com"
        id="email"
        className="input"
        name="email"
        type="email"
      />
      <label className="label" htmlFor="address">
        Address
      </label>
      <input
        placeholder="Ethiopia addis ababa"
        id="address"
        className="input"
        name="address"
      />
    </div>
  );
}

export default Contact;
