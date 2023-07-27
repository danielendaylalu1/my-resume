import React from "react";

function Skills({ resumeData }) {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {resumeData.skills.map((skill, index) => {
          return <li key={index}>{skill.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default Skills;
