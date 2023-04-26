import React, { useMemo } from "react";
import Navbar from "./navbar";
import Mainpage from "./mainpage";
export default function App() {
  const [state, useState] = React.useState(true);
  function ToggleMode() {
    useState((prev) => !prev);
  }
  function getdata() {
    fetch("http://localhost:5000/api/products")
      .then((res) => console.log(res.json()))
      .catch((err) => console.log(err));
  }
  const arr = useMemo(() => {
    return [5, 7, 1, 0, 22, 11, 7, 2, 5];
  }, []);
  return (
    <div>
      <button onClick={getdata}>getarr</button>
      <Navbar ToggleMode={ToggleMode} state={state} />
      <Mainpage state={state} items={arr} />
    </div>
  );
}
