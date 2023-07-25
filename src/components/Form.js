import React from "react";

function Form() {
  return (
    <div className="container">
      <h1 className="resume-header">Build your resume</h1>
      <form className="form">
        <div className="card">
          <label className="label" for="name">
            Full Name
          </label>
          <input
            placeholder="full name"
            id="name"
            className="input"
            name="name"
          />
        </div>

        <div className="card">
          <label className="label" for="school">
            School
          </label>
          <input
            placeholder="School.."
            id="school"
            className="input"
            name="acadamy"
          />
        </div>
        <div className="card">
          <h2>Contact</h2>
          <label className="label" for="name">
            Full Name
          </label>
          <input
            placeholder="full name"
            id="name"
            className="input"
            name="name"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
