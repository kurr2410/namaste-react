import React from 'react';
import ReactDOM from 'react-dom/client';
// const header = document.createElement('h1');
// header.innerHTML = "Hello world from JS"
// const element = document.getElementById('root');
// element.appendChild(header);


// const heading = React.createElement("h1",{id:"heading"},"Hello world from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const h1tag = React.createElement("h1",{}, "this is H1 tag");   // creates Object
const h1tag2 = React.createElement("h1",{}, "this is another H1 tag")
const child = React.createElement("div", { id: "child" }, [h1tag,h1tag2] ); // for sibling use array
const parent = React.createElement("div", { id: "parent" }, child);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);    // converts react object to html elements(tags)