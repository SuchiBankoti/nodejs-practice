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
      <div
        onClick={ToggleMode}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ color: "white" }}>Light</div>
        <div style={{ width: 20, height: 10, background: "white" }}></div>
        <div style={{ width: 20, height: 10, background: "black" }}></div>
        <div style={{ color: "black" }}>Dark</div>
      </div>
    </div>
  );
}
