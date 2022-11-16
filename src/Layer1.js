import React from "react";
import { Circle, Group, Layer, Rect } from "react-konva";
import { useState } from "react";
import { Html } from "react-konva-utils";

function Layer1({
  showCircle,
  showRect,
  handelCreateRect,
  handelCreateCircle,
}) {
  // const [showRect, setShowRect] = useState(false);
  // const [showCircle, setShowCircle] = useState(false);
  // const handelCreateRect = () => {
  //   setShowRect((showRect) => !showRect);
  //   console.log("showRect" + showRect);
  // };
  // const handelCreateCircle = () => {
  //   setShowCircle((showCircle) => !showCircle);
  //   console.log("showCircle: " + showCircle);
  // };
  return (
    <Layer>
      <Html
        divProps={{
          style: {
            position: "absolute",
            top: 10,
            left: 10,
          },
        }}
      >
        <button onClick={handelCreateRect}>create Rect</button>
        <button onClick={handelCreateCircle}>create Circle</button>
      </Html>
      <Rect
        visible={showRect}
        x={100}
        y={100}
        width={100}
        height={50}
        // fill={"yellow"}
        stroke={"black"}
        strokeWidth={2}
      />
      <Circle visible={showCircle} radius={30} x={50} y={50} stroke={"blue"} />
    </Layer>
  );
  // {
  //   showRect && (
  //     <layer2>
  //       <Layer1 showRect={showRect} />
  //     </layer2>
  //   );
  // }
  // {
  //   showCircle && (
  //     <layer2>
  //       <Layer1 showCircle={showCircle} />
  //     </layer2>
  //   );
  // }
}

export default Layer1;
