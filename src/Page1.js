import React from "react";
import { useState } from "react";

function Page1() {
  //for create shape
  const [showRect, setShowRect] = useState(false);
  const handelCreateRect = () => {
    setShowRect((showRect) => !showRect);
    console.log(showRect);
  };
  return (
    <div>
      <button onClick={handelCreateRect}>create Rect</button>
      <br />
    </div>
  );
}

export default Page1;
