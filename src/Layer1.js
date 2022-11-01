import React from "react";
import { Layer, Rect } from "react-konva";

function Layer1(showRect) {
  return (
    <Layer style={{ background: "red" }}>
      <Rect
        visible={showRect}
        x={20}
        y={100}
        width={100}
        height={50}
        // fill={"yellow"}
        stroke={"black"}
        strokeWidth={2}
        draggable
      />
    </Layer>
  );
}

export default Layer1;
