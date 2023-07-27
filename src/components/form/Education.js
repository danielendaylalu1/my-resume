import React from "react";
import { useState } from "react";

const Education = () => {
  const [edu, setEdu] = useState([0]);
  return (
    <div className="card">
      <h2>Education</h2>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setEdu((prve) => [...prve, edu.length * 1 + 1]);
        }}
      >
        Add
      </button>
      <div className="edu-card">
        <input name="education" placeholder="Education" />
        <div className="year">
          <div>
            <label className="label" htmlFor="syear">
              Start year
            </label>
            <input name="syear" type="date" id="syear" />
          </div>
          <div>
            <label className="label" htmlFor="eyear">
              Ending year
            </label>
            <input name="eyear" type="date" id="eyear" />
          </div>
        </div>
      </div>
      {edu.map((e) => {
        return (
          <div className="edu-card" key={e}>
            <input name="education" placeholder="Education" />
            <div className="year">
              <div>
                <label className="label" htmlFor="syear">
                  Start year
                </label>
                <input name="syear" type="date" id="syear" />
              </div>
              <div>
                <label className="label" htmlFor="eyear">
                  Ending year
                </label>
                <input name="eyear" type="date" id="eyear" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
