import React from 'react';
import ReactDOM from 'react-dom/client';

//Episode:01

// const header = document.createElement('h1');
// header.innerHTML = "Hello world from JS"
// const element = document.getElementById('root');
// element.appendChild(header);
// const heading = React.createElement("h1",{id:"heading"},"Hello world from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Episode:02
// const h1tag = React.createElement("h1",{}, "this is H1 tag");   // creates Object
// const h1tag2 = React.createElement("h1",{}, "this is another H1 tag")
// const child = React.createElement("div", { id: "child" }, [h1tag,h1tag2] ); // for sibling use array
// const parent = React.createElement("div", { id: "parent" }, child);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);    // converts react object to html elements(tags)

//Episode:03

//React element (JS Object)
// const jsxheading = (<h1 id="heading" className='headingClass'>
//     Namaste React with JSX
// </h1>)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

//React component (functional)
const Title = () => (
    <h1>Namaste React Title for component composition</h1>
)
//js variable
const test = 10000;

//React Element
const reactElement2 = <h3>Testing React element in another React element</h3>
//React Element
const reactElementTest = <div>
    {reactElement2}
    <h2> Testing React Element inside React component</h2>
</div>

// React functional component
const HeadingComponent = () => { // component composition. Also it is having JSX code(reactElementTest) being execute to give html tag to view.
    return <div>
        {test}
        {reactElementTest}
        <Title />
        <Title></Title>
        {Title()}
        <h1 id="heading" className="headingClass">Namaste React with Functional component</h1>
    </div>
}

const HeadingComponent2 = () => { // Example for using sibling components using <React.Fragment></React.Fragment> or <></>   and without using unnecessary div parents
    return  <React.Fragment>
        {test}
        {reactElementTest}
        <Title />
        <Title></Title>
        {Title()}
        <h1 id="heading" className="headingClass">Namaste React with Functional component 2</h1>
    </React.Fragment>
}

/*
<Title />
<Title></Title>
{ Title() }

These same thing
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(reactElementTest)       // it renders React element(JSX code)
root.render(<HeadingComponent />)

const root2 = ReactDOM.createRoot(document.getElementById("root2"))
root2.render(HeadingComponent2())
