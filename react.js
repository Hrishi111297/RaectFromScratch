const heading=React.createElement("h1",{ id:"parent"},
    [React.createElement("h1",{ id:"child1"},"Hello React!!!"),
        React.createElement("h1",{ id:"child2"},"Hello React!!!")]
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

