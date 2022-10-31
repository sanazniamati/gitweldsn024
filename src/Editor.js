import React, { Fragment, useRef, useState } from "react";
import { Layer, Stage, Rect } from "react-konva";
import Page3 from "./Page3";

export default function Editor() {
  // //for create shape
  // const [showRect, setShowRect] = useState(false);
  // const handelCreateRect = () => {
  //   setShowRect((showRect) => !showRect);
  // };
  // //for coloring
  // const [colorYellow, setColorYellow] = useState("");
  // const handelColorRect = () => {
  //   setColorYellow("yellow");
  // };
  //for change width and height
  // const [width, setWidth] = useState(100);
  // const [height, setHeight] = useState(50);
  // const handelIncWidth = () => {
  //   setWidth(width + 15);
  // };
  // const handelDecWidth = () => {
  //   setWidth(width - 15);
  // };
  // const handelIncHeight = () => {
  //   setHeight(height + 15);
  // };
  // const handelDecHeight = () => {
  //   setHeight(height - 15);
  // };

  const stageRef = useRef(null);
  function downloadURI(dataUrl, name) {
    // Construct the 'a' element
    const link = document.createElement("a");
    link.download = name;
    // Construct the URI
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    // Cleanup the DOM
    document.body.removeChild(link);
  }
  const handleExport = () => {
    const dataUrl = stageRef.current.toDataURL();
    console.log(stageRef.current);
    // we also can save url as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    // downloadURI(dataUrl, "stage.png");
    // downloadURI(dataUrl, "stageJason.json");
    // downloadURI(dataUrl, "stageJpeg.jpeg");
    // downloadURI(dataUrl, "stageSVG.svg");
    downloadURI(dataUrl, "stagePNG.png");
  };

  return (
    <Fragment>
      <button onClick={handleExport}>Click here to export stage as png</button>
      <br />
      {/*<button onClick={handelCreateRect}>create Rect</button>*/}
      {/*<br />*/}
      {/*<button onClick={handelColorRect}>color Rect</button>*/}
      {/*<br />*/}

      {/*<button onClick={handelIncWidth}>width : +</button>*/}
      {/*<br />*/}
      {/*<button onClick={handelDecWidth}>width : -</button>*/}

      {/*<div>*/}
      {/*  /!*<label>height : </label>*!/*/}
      {/*  <button onClick={handelIncHeight}>height : + </button>*/}
      {/*  <button onClick={handelDecHeight}>height : -</button>*/}
      {/*</div>*/}

      <Stage
        ref={stageRef}
        width={500}
        height={200}
        style={{ background: "lightpink" }}
      >
        <Layer>
          <Rect
            // visible={showRect}
            x={20}
            y={100}
            width={100}
            height={50}
            fill={"yellow"}
            stroke={"black"}
            strokeWidth={2}
            draggable
          />
        </Layer>
      </Stage>
    </Fragment>
  );
}
