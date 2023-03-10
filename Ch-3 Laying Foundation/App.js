// import {React, createElement as ce} from 'react';
import React from "react";
import ReactDOM from "react-dom/client";

/* 
<div class="header">
    <h1>Title</h1>
    <ul>
        <li>Home</li>
        <li>About Us</li>
    </ul>
</div> 
*/

// const heading =ce(
//     "div",
//     {
//         className:"header",
//         key:"header",

//     },

//     [ce(
//         "h1",
//         {
//             key:"Title "
//         }
//     )]
// )

/*
const heading = ce(
      "h1",
      {
        id: "title",
        key: "h1",
},
"Namaste react"
);

*/

// create header element using JSX

const heading = //put a parenthesis to put in multiple lines
  (
    <h1 id="title" key="h2">
      This is JSX
    </h1>
  );


//if in 1 line skip parenthesis ,if in multiple wrap jsx code inside brackets
const HeaderComponent2 = () => {
  return (
    <div>
      <h1>Hello Functional component</h1>
      <h2>hehe</h2>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent2/>);
