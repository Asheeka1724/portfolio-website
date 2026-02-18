import React from "react";

function Header(props) {
  return (
    <header style={{ background: "#222", color: "white", padding: "15px" }}>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
