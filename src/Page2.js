import React from "react";
import { useState } from "react";

function Page2(props) {
  //for coloring
  const [colorYellow, setColorYellow] = useState("");
  const handelColorRect = () => {
    setColorYellow("yellow");
  };
  return (
    <div>
      <button onClick={handelColorRect}>color Rect</button>
      <br />
    </div>
  );
}

export default Page2;
