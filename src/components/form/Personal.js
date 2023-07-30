import React from "react";

const Personal = () => {
  return (
    <div className="card">
      <h2>personal Info</h2>
      <label className="label" htmlFor="name">
        Full Name
      </label>
      <input placeholder="full name" id="name" className="input" name="name" />
      <label className="label" htmlFor="profession">
        profession
      </label>
      <input
        placeholder="profession.."
        id="profession"
        className="input"
        name="profession"
      />
    </div>
  );
};

export default Personal;
