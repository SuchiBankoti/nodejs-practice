import React, { useMemo } from "react";
import Navbar from "./navbar";
import Mainpage from "./mainpage";
export default function App() {
  const [state, useState] = React.useState(true);
  function ToggleMode() {
    useState((prev) => !prev);
  }
  const arr = useMemo(() => {
    return [5, 7, 1, 0, 22, 11, 7, 2, 5];
  }, []);
  return (
    <div>
      <Navbar ToggleMode={ToggleMode} state={state} />
      <Mainpage state={state} items={arr} />
    </div>
  );
}
