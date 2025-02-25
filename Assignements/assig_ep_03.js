import React from "react";
import ReactDom from "react-dom/client";

//Q1. Create a Nested header Element using React.createElement(h1,h2,h3 inside a...
// ...div with class “title”)

const parent = React.createElement('div', {id:"parent"}, 
    React.createElement('div', {classname:'title'},[
    React.createElement('h1', {id:"heading1"}, "I am Heading 1"),
    React.createElement('h2', {id:"heading2"}, "I am heading 2"),
    React.createElement('h3', {id:'heading3'}, "I am heading 3")
]))

//Q2. Create the same element using JSX

const HeadingComponent = () => (
    <div className="title"></div>
)

// component composition
const Component = () => (
    <d1 id = "parent">
    <HeadingComponent />
        <h1>I am heading 1</h1>
        <h2>I am heading 2</h2>
        <h3>I am heading 3</h3>
    </d1>

)

const Logo = () => (
    <img className="logo" src="https://via.placeholder.com/50" alt="Logo" />
  );
  
  // Search Bar Component
  const SearchBar = () => (
    <form id="form">
      <input type="search" id="query" name="q" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
  
  // User Icon Component
  const User = () => (
    <img className="user-icon" src="https://via.placeholder.com/40" alt="User" />
  );
  
const Header = () => (
    <div className="header">
   <Logo />,
   <SearchBar />,
   <User></User>,
   </div>
)





ReactDom.createRoot(document.getElementById('root')).render(<Header/>)