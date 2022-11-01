import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Editor from "./Editor";
import Page3 from "./Page3";
import { Layer, Rect, Stage } from "react-konva";
import Layer1 from "./Layer1";
import Layer2 from "./Layer2";

const Wizard = ({ children }) => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePageIndex];

  const goNextPage = () => {
    setActivePageIndex((index) => index + 1);
    console.log(
      "activePageIndex " +
        activePageIndex +
        " currentPage " +
        pages[activePageIndex]
    );
  };

  const goPrevPage = () => {
    setActivePageIndex((index) => index - 1);
    console.log("activePageIndex " + activePageIndex);
  };

  const ButtonPrev = () =>
    activePageIndex > 0 ? (
      <Button type="button" onClick={goPrevPage}>
        Prev
      </Button>
    ) : null;
  const ButtonNext = () =>
    activePageIndex < pages.length - 1 ? (
      <Button type="button" onClick={goNextPage}>
        Next
      </Button>
    ) : null;

  return (
    <div className="wizard">
      <div className="wizard__content">{currentPage}</div>
      <Stage
        // ref={stageRef}
        width={500}
        height={200}
        style={{ background: "lightpink" }}
      ></Stage>
      {/*{currentPage[1] ? (*/}
      {/*  <Stage*/}
      {/*    // ref={stageRef}*/}
      {/*    width={500}*/}
      {/*    height={200}*/}
      {/*    style={{ background: "lightpink" }}*/}
      {/*  >*/}
      {/*    /!*<Layer1 />*!/*/}
      {/*  </Stage>*/}
      {/*) : (*/}
      {/*  <Stage*/}
      {/*    // ref={stageRef}*/}
      {/*    width={500}*/}
      {/*    height={200}*/}
      {/*    style={{ background: "lightpink" }}*/}
      {/*  >*/}
      {/*    /!*<Layer2 />*!/*/}
      {/*  </Stage>*/}
      {/*)}*/}
      {/*<Stage*/}
      {/*  // ref={stageRef}*/}
      {/*  width={500}*/}
      {/*  height={200}*/}
      {/*  style={{ background: "lightpink" }}*/}
      {/*>*/}
      {/*  {activePageIndex === 0 ? <Layer2 /> : <Layer2 />}*/}
      {/*</Stage>*/}
      <div className="wizard__buttons">
        <p>active page : {activePageIndex}</p>
        <br /> <br />
        <ButtonPrev />
        <ButtonNext />
      </div>
    </div>
  );
};

export default Wizard;
