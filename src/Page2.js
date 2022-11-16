import React from "react";
import { useState } from "react";
import Layer2 from "./Layer2";
import { Layer, Rect, Stage } from "react-konva";

function Page2(props) {
  //for coloring
  // const [colorYellow, setColorYellow] = useState("");
  // const handelColorRect = () => {
  //   setColorYellow("yellow");
  // };
  return (
    <div>
      <h1>page2</h1>
      {/*<button onClick={handelColorRect}>color Rect</button>*/}
      <br />
      {/*<Stage width={500} height={200} style={{ background: "lightpink" }}>*/}
      {/*  <Layer style={{ background: "red" }}>*/}
      {/*    <Rect*/}
      {/*      // visible={showRect}*/}
      {/*      x={20}*/}
      {/*      y={100}*/}
      {/*      width={100}*/}
      {/*      height={50}*/}
      {/*      fill={colorYellow}*/}
      {/*      stroke={"black"}*/}
      {/*      strokeWidth={2}*/}
      {/*      draggable*/}
      {/*    />*/}
      {/*  </Layer>*/}
      {/*</Stage>*/}
    </div>
  );
}

export default Page2;
