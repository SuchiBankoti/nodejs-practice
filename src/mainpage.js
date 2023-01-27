import React from "react";

export default function Mainpage(props) {
  let state = props.state;
  return (
    <div
      className="mainpage"
      style={{
        background: state ? "#282D35" : "white",
        color: state ? "rgb(220, 218, 218)" : "black",
      }}
    >
      <h2>Fun Facts About React</h2>
      <ul>
        <li>React is declarative</li>
        <li>Every component must return JSX syntax</li>
        <li>Return value should contain single parent</li>
        <li>Webpack is used to bind all the files</li>
      </ul>
    </div>
  );
}
