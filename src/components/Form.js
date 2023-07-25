import React, { useState } from "react";

function Form() {
  const [ach, setAch] = useState([]);
  const [skill, setskill] = useState([]);
  const [edu, setEdu] = useState([]);
  return (
    <div className="container">
      <h1 className="resume-header">Build your resume</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.skill.forEach((e) => console.log(e.value)));
        }}
      >
        <div className="card">
          <h2>personal Info</h2>
          <label className="label" htmlFor="name">
            Full Name
          </label>
          <input
            placeholder="full name"
            id="name"
            className="input"
            name="name"
          />
          <label className="label" htmlFor="school">
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
            placeholder="Ethiopia addis abab"
            id="address"
            className="input"
            name="address"
          />
        </div>
        <div className="card">
          <h2>Achievement</h2>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setAch((prve) => [...prve, ach.length * 1 + 1]);
              console.log(ach);
            }}
          >
            Add
          </button>
          <div className="ach-card">
            <input name="achievement" placeholder="achievement" />
            <input name="ach-year" type="date" />
          </div>
          {ach.map((a) => {
            return (
              <div className="ach-card" key={a}>
                <input name="achievement" placeholder="achievement" />
                <input name="ach-year" type="date" />
              </div>
            );
          })}
        </div>
        <div className="card">
          <h2>Skills</h2>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setskill((prve) => [...prve, skill.length * 1 + 1]);
              console.log(skill);
            }}
          >
            Add
          </button>
          <div className="ach-card">
            <input name="skill" placeholder="skill" />
          </div>
          {skill.map((a) => {
            return (
              <div className="ach-card" key={a}>
                <input name="skill" placeholder="skill" />
              </div>
            );
          })}
        </div>
        <div className="card">
          <h2>Summery</h2>
          <textarea cols={20} rows={10} name="summery"></textarea>
        </div>
        <div className="card">
          <h2>Education</h2>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setEdu((prve) => [...prve, edu.length * 1 + 1]);
              console.log(edu);
            }}
          >
            Add
          </button>
          <input name="education" placeholder="Education" />
          <label className="label" htmlFor="syear">
            Start year
          </label>
          <input name="edu-year" type="date" id="syear" />
          <label className="label" htmlFor="eyear">
            Ending year
          </label>
          <input name="edu-year" type="date" id="eyear" />
          {edu.map((e) => {
            return (
              <div className="edu-card" key={e}>
                <input name="education" placeholder="Education" />
                <label className="label" htmlFor="syear">
                  Start year
                </label>
                <input name="edu-year" type="date" id="syear" />
                <label className="label" htmlFor="eyear">
                  Ending year
                </label>
                <input name="edu-year" type="date" id="eyear" />
              </div>
            );
          })}
        </div>
        <div className="card">
          <label className="label" htmlFor="title">
            title
          </label>
          <input />
        </div>
        <button type="submit">preview</button>
      </form>
    </div>
  );
}

export default Form;
