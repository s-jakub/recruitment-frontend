import React from "react";
import "./Button.styles.css";

const Button = ({ text, callback }) => {
  return (
    <button className="btn" onClick={callback}>
      {text}
    </button>
  );
};

export default Button;
