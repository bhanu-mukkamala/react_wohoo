import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},
  [React.createElement("div",{id:"child1"},
            [React.createElement("h1",{id:"nestedh1"},"This is a React Wohoo!"),React.createElement("h2",{id:"nestedh2"},"By B_Mukkamala")]),
            React.createElement("div",{id:"child2"},
            [React.createElement("h1",{id:"nestedh1"},"I'm an h1 tag(nested btw)"),React.createElement("h2",{id:"nestedh2"},"I'm an h2 tag")])]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);