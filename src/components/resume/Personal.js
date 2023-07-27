import React from "react";

const Personal = ({ resumeData }) => {
  return (
    <div className="personal">
      <h1 className="name">{resumeData.name}</h1>
      <h3 className="acadamy">{resumeData.acadamy}</h3>
    </div>
  );
};

export default Personal;
