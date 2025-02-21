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
    // [h1, h2] an array if we have more than one <h> tags.
    React.createElement("div", {id:'child'}, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]) 
])

/* for more optimized way to write the above code we can use JSX: */
// JSX


const heading = React.createElement("h1", {id:'heading'}, "Hello World from React");
    //    <!-- 
    //         creation of h1 tag
    //     -->
    // {}-> used to give attributes to the tag. e.g className, id, etc.
    // consol.log(headng) will give us the object type of heading,
    // so which means heading is an object of type h1.
const root = ReactDOM.createRoot(document.getElementById("root"));
 //     <!-- 
    //         creating root inside react. everything will
    //         render inside root.
    //     -->
root.render(parent);
// root.render will convert the js heading object....
// ...into html heading tag and put it on the  root.



   
        
   