import React from "react";

const Achievement = ({ resumeData }) => {
  return (
    <div className="achievement">
      <h2>Achievement</h2>
      <ul>
        {resumeData.achievement.ach.map((ach, index) => {
          return (
            <li key={index}>
              <h4>{ach.value}</h4>
              <p>{resumeData.achievement.year[index].value}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Achievement;
