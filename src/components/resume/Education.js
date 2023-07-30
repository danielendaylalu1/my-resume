import React from "react";

const Education = ({ resumeData }) => {
  return (
    <div className="education">
      <h2>Education</h2>
      {resumeData.education.edu.map((edu, index) => {
        return (
          <div key={index}>
            <h3>{edu.value}</h3>
            <h4>{resumeData.education.major[index].value}</h4>
            <p>
              <span>{resumeData.education.syear[index].value}</span>-
              <span>{resumeData.education.eyear[index].value}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
