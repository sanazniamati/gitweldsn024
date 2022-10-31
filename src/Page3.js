import React from "react";
import { useState } from "react";

function Page3() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(50);
  const handelIncWidth = () => {
    setWidth(width + 15);
    console.log("width: " + width);
  };
  const handelDecWidth = () => {
    setWidth(width - 15);
  };
  return (
    <div>
      <button onClick={handelIncWidth}>width : +</button>
      <br />
      <button onClick={handelDecWidth}>width : -</button>
    </div>
  );
}

export default Page3;
