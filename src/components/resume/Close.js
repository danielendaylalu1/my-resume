import React from "react";
import { useDispatch } from "react-redux";
import { toogle } from "../../store/uiSlice";

const Close = () => {
  const dispatch = useDispatch();
  return (
    <div className="close">
      <p
        className="close-text"
        onClick={() => {
          dispatch(toogle());
        }}
      >
        X
      </p>
    </div>
  );
};

export default Close;
