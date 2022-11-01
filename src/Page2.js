import React from "react";
import { useState } from "react";
import Layer2 from "./Layer2";

function Page2(props) {
  //for coloring
  const [colorYellow, setColorYellow] = useState("");
  const handelColorRect = () => {
    setColorYellow("yellow");
  };
  return (
    <div>
      <button onClick={handelColorRect}>color Rect</button>
      <br />
      {/*<Layer2*/}
      {/*  colorYellow={colorYellow}*/}
      {/*  handelColorRect={setColorYellow("yellow")}*/}
      {/*/>*/}
    </div>
  );
}

export default Page2;
