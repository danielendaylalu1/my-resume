import React from "react";
import { useState } from "react";

const Skills = () => {
  const [skill, setskill] = useState([]);
  return (
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
      {skill.map((a, index) => {
        return (
          <div className="ach-card" key={index}>
            <input name={`skill${index + 1}`} placeholder="skill" />
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
