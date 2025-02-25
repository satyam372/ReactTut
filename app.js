import React from "react";
import ReactDOM from 'react-dom/client';
/*
  <div id = 'parent'>
    <div id = 'child'>    How to create nested elements in React?
    <h1>I am h1 tag</h1>
    <div>
    <div id = 'child'>    
    <h1>I am h1 tag</h1>
    <div>
  <div>
  ReactElement() => object => HTML(Browser Understands)
*/

// const parent = React.createElement('div', {id:'parent'}, child)
// const parentRoot = ReactDOM.createRoot(document.getElementById("div"));
// const child = React.createElement('div', {id:'child'})
// const childRoot = ReactDOM.createRoot(document.getElementById("div"));
// const nestedHeading = React.createElement('h1', {id:'nestedheading'}, 'Nested tags')
// childRoot.render(nestedHeading)

/* A more optimized way to write the above code is as follows: */
const parent = React.createElement("div", {id:'parent'}, [
    React.createElement("div", {id:'child'}, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]), 
])
/* working of above code in backend:-
 React.createElement() => ReactJs object => HTML Element
 */

//console.log(parent)

/* for more optimized way to write the above code we can use JSX: */

// JSX :- JSX is a javascript syntax which is used to create React elements..
//       ... in simpler/easier/readable way.
// Note:- React and Jsx is different, we can make web-app without jsx also.
// Note:- JSX is HTML like syntax but not mixture of HTML and JS. or HTML inn ..
// .... java script. HTML, JSX, JS, REACT are all discrete things.

const jsxheading = (
<h1 className="heading" tabIndex={5}>
    Namaste React 🧡</h1>
)
/* working of above code in backend:-
 JSX => Babel => React.createElement() => ReactJs Element Object => HTML(Browser Understands)
 */

/*console.log(jsxheading)....
if we see the output of line 43 and line 33, it is the same.
*/


const heading = React.createElement("h1", {id:'heading'}, "Hello World from React");
    //    <!-- 
    //         creation of h1 tag
    //     -->
    // {}-> used to give attributes to the tag. e.g className, id, etc.
    // consol.log(headng) will give us the object type of heading,
    // so which means heading is an object of type h1.
    // A react element is a object, when rendered on DOM it becomes...
    //.... a HTML tag/element.

// Element

const Title = () => <h1 className="head" tabIndex={5}>React Tutorial</h1>


// Functional Component :- A function which returns a react element or JSX code.

// Puting component inside another component and element inside component

const ComponentHeading = () => (
    <d1 id = 'container'>
      <Title/>
      {heading}
      <h1 className="heading">Namaste React Functional Component</h1>
    </d1>    
)

const root = ReactDOM.createRoot(document.getElementById("root"));
 //     <!-- 
    //         creating root inside react. everything will
    //         render inside root.
    //     -->
root.render(<ComponentHeading/>);
// root.render will convert the js heading object....
// ...into html heading tag and put it on the root.
