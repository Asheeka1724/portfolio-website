import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      style={{
        padding: "10px 15px",
        background: "#00adb5",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      {props.label}
    </button>
  );
}

export default Button;
