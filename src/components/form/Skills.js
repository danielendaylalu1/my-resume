import React, { useState } from "react";

const Skills = () => {
  const [skill, setSkill] = useState([0, 1]);
  return (
    <div className="card">
      <h2>Skills</h2>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setSkill((prve) => [...prve, skill.length * 1 + 1]);
        }}
      >
        Add
      </button>

      {skill.map((a, index) => {
        return (
          <div className="ach-card" key={index}>
            <input name="skill" placeholder="skill" />
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
