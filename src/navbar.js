import React from "react";

export default function Navbar(props) {
  const { ToggleMode, state } = props;
  return (
    <div className="navbar" style={{ background: state ? "#21222A" : "white" }}>
      <div className="left">
        <img
          src={process.env.PUBLIC_URL + "/logo192.png"}
          alt="logo"
          style={{ width: 45 }}
        ></img>
        <h1 style={{ color: "#61DAFB" }}>React Facts</h1>
      </div>
      <label>
        <span style={{ color: state ? "grey" : "black" }}>Light</span>
        <input type="radio" onClick={ToggleMode}></input>
        <span style={{ color: state ? "white" : "grey" }}>Dark</span>
      </label>
    </div>
  );
}
