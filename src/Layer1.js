import { Circle, Layer, Rect } from "react-konva";

function Layer1({ width, showCircle, showRect }) {
  return (
    <Layer>
      <Rect
        visible={showRect}
        x={100}
        y={100}
        width={width}
        height={50}
        // fill={"yellow"}
        stroke={"black"}
        strokeWidth={2}
      />
      <Circle visible={showCircle} radius={30} x={50} y={50} stroke={"blue"} />
    </Layer>
  );
}

export default Layer1;
