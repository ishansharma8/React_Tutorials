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

const heading = (                               //put a parenthesis to put in multiple lines
  <h1 id="title" key="h2">
    This is JSX
  </h1>
);


const HeaderComponent=()=>{
    return <h1>Hello Functional component</h1>;
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);