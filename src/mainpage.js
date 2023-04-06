import React, { useMemo } from "react";

export default function Mainpage(props) {
  const { state, items } = props;
  const sortedList = useMemo(() => {
    console.log("check for rerendering");
    return items.sort((a, b) => a - b).map((e, i) => <li key={i}>{e}</li>);
  }, [items]);
  return (
    <div
      className="mainpage"
      style={{
        background: state ? "#282D35" : "white",
        color: state ? "rgb(220, 218, 218)" : "black",
      }}
    >
      <h2>Fun Facts About React</h2>
      <ul>{sortedList}</ul>
    </div>
  );
}
