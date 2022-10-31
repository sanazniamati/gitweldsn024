import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Wizard from "./Wizard";
import Page3 from "./Page3";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { Layer, Rect, Stage } from "react-konva";

// const Page1 = () => (
//   <div>
//     <button onClick={handelIncWidth}>width : +</button>
//     <br />
//     <button onClick={handelDecWidth}>width : -</button>
//   </div>
// );
// const Page2 = () => (
//   <div>
//     <h1>Pagina 2</h1>
//   </div>
// );
// const Page3 = () => (
//   <div>
//     <h1>Pagina 3</h1>
//   </div>
// );
const GitweldWizard = () => {
  return (
    <Card>
      <Wizard>
        <Page1 />
        <Page2 />
        <Page3 />
      </Wizard>
    </Card>
  );
};

export default GitweldWizard;
