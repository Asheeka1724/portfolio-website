import React, { useState } from "react";
import Button from "./Button";

function Form() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert("Hello " + name);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Contact Form</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
}

export default Form;
