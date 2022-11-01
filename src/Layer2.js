import React from "react";
import { Layer, Rect } from "react-konva";

function Layer2(colorYellow, handelColorRect) {
  return (
    <Layer style={{ background: "red" }}>
      <Rect
        // visible={showRect}
        x={20}
        y={100}
        width={100}
        height={50}
        fill={colorYellow}
        stroke={"black"}
        strokeWidth={2}
        draggable
      />
    </Layer>
  );
}

export default Layer2;
