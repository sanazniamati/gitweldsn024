import React from "react";
import { useState } from "react";

function Page3({ handelDecWidth, handelIncWidth }) {
  // const [width, setWidth] = useState(100);
  // const [height, setHeight] = useState(50);
  // const handelIncWidth = () => {
  //   setWidth(width + 15);
  //   console.log("width: " + width);
  // };
  // const handelDecWidth = () => {
  //   setWidth(width - 15);
  // };
  return (
    <div>
      <h1>page3</h1>
      <button onClick={handelIncWidth}>width : +</button>
      <br />
      <button onClick={handelDecWidth}>width : -</button>
    </div>
  );
}

export default Page3;
