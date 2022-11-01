import React from "react";
import { useState } from "react";
import { Layer, Rect } from "react-konva";
import Layer1 from "./Layer1";

function Page1() {
  //for create shape
  const [showRect, setShowRect] = useState(false);
  const handelCreateRect = () => {
    setShowRect((showRect) => !showRect);
    console.log(showRect);
  };
  return (
    <>
      <div>
        <button onClick={handelCreateRect}>create Rect</button>
        <br />
        {/*<Layer1 showRect={showRect} />*/}
      </div>
    </>
  );
}

export default Page1;
