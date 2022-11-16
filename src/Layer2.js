import React from "react";
import { Circle, Layer, Rect } from "react-konva";
import Layer1 from "./Layer1";
import { useState } from "react";
import { Html } from "react-konva-utils";

function Layer2({ showRect, colorYellow, handelColorRect }) {
  // const [colorYellow, setColorYellow] = useState("");
  // const handelColorRect = () => {
  //   setColorYellow("yellow");
  // };
  return (
    <Layer>
      {/*<Html*/}
      {/*  divProps={{*/}
      {/*    style: {*/}
      {/*      position: "absolute",*/}
      {/*      top: 10,*/}
      {/*      left: 10,*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <button onClick={handelColorRect}>color Rect</button>*/}
      {/*</Html>*/}
      {/*<Rect*/}
      {/*  visible={showRect}*/}
      {/*  x={100}*/}
      {/*  y={100}*/}
      {/*  width={100}*/}
      {/*  height={50}*/}
      {/*  fill={colorYellow}*/}
      {/*  stroke={"black"}*/}
      {/*  strokeWidth={2}*/}
      {/*/>*/}
      <Circle radius={30} x={50} y={50} stroke={"red"} />
    </Layer>
  );
}

export default Layer2;
