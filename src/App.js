import React from "react";
import Navbar from "./navbar";
import Mainpage from "./mainpage";
export default function App() {
  const [state, useState] = React.useState(true);
  function ToggleMode() {
    useState((prev) => !prev);
  }
  return (
    <div>
      <Navbar ToggleMode={ToggleMode} state={state} />
      <Mainpage state={state} />
    </div>
  );
}
