import React from "react";
import { useState } from "react";

const Achievement = () => {
  const [ach, setAch] = useState([0, 1]);
  return (
    <div className="card">
      <h2>Achievement</h2>
      <button
        type="button"
        className="btn"
        onClick={() => {
          setAch((prve) => [...prve, ach.length * 1 + 1]);
        }}
      >
        Add
      </button>

      {ach.map((a) => {
        return (
          <div className="ach-card" key={a}>
            <input name="achievement" placeholder="achievement" />
            <input name="achyear" type="date" />
          </div>
        );
      })}
    </div>
  );
};

export default Achievement;
