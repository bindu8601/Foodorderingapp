import "./card.css";
import React from "react";
export const Input = React.forwardRef((props, ref) => {
  return (
    <div className="wholeinput">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} className="input" {...props.input} />
    </div>
  );
});
