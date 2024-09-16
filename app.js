const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},
            [React.createElement("h1",{id:"nestedh1"},"I'm an h1 tag(nested btw)"),React.createElement("h2",{id:"nestedh2"},"I'm an h2 tag")]),
            React.createElement("div",{id:"child2"},
            [React.createElement("h1",{id:"nestedh1"},"I'm an h1 tag(nested btw)"),React.createElement("h2",{id:"nestedh2"},"I'm an h2 tag")])]);
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);