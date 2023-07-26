import React from "react";
import { useState } from "react";

const Education = () => {
  const [edu, setEdu] = useState([]);
  return (
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
  );
};

export default Education;
