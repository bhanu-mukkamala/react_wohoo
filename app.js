import React from "react";
import ReactDOM from "react-dom/client";

// React element using core react, to creat an html element
const heading = React.createElement("h1",{id : "heading"},"React Wohoo!");

// Creating a react element using JSX syntax  
const JsxHeading = (
<h1 id="heading">
  React Wohoo using JSX!
  </h1>)
//React functional component
  const HeadingComponent = () => {
    return<div id="container"><h1 className="heading">Namaste React component using js arrow function</h1></div>
  }
  //React functional component written using shorthand notation
  const HeadingComponent2 =() =><h1 className="heading">Namaste React Component using arrow shorthand notation</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);