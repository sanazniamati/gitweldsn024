import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Editor from "./Editor";
import Page3 from "./Page3";

const Wizard = ({ children }) => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePageIndex];

  const goNextPage = () => {
    setActivePageIndex((index) => index + 1);
  };

  const goPrevPage = () => {
    setActivePageIndex((index) => index - 1);
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
      <div className="wizard__buttons">
        <br /> <br />
        <ButtonPrev />
        <ButtonNext />
      </div>
      {/*<Editor />*/}
    </div>
  );
};

export default Wizard;
