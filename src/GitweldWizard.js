import { Card } from "react-bootstrap";
import Wizard from "./Wizard";
import Page3 from "./Page3";
import Page1 from "./Page1";
import Page2 from "./Page2";
import { useState } from "react";

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
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(50);
  const handelIncWidth = () => {
    setWidth(width + 15);
    console.log("width: " + width);
  };
  const handelDecWidth = () => {
    setWidth(width - 15);
    console.log("width: " + width);
  };
  return (
    <Card>
      <Wizard width={width}>
        <Page1 />
        {/*<Page2 />*/}
        <Page3
          handelIncWidth={handelIncWidth}
          handelDecWidth={handelDecWidth}
        />
      </Wizard>
    </Card>
  );
};

export default GitweldWizard;
