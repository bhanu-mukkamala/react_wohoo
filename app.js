import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head">Namaste React!</h1>
)
const number = 10000;

//Component composition
  const HeadingComponent = () => (
    <div id="container">
      <h1>{number}</h1>
    <h1 className="heading">Namaste React component using js arrow function</h1>
        </div>
  );
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);