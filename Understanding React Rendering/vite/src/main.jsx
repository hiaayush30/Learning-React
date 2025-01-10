import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function Yo(){
  return( 
  <h1>Yo</h1>
)
}
//putting yo() instead of <yo/> in root.render will also work as both are syntactically same
//React converts the above fn into a tree structure(reactElement) and injects it into the root element

//in customReact we created a customRender fn to render below which understood this structure of element
// const reactElement={   
//   type:"a",
//   props:{
//       href:"https://google.com",
//       target:"_blank",
//   },
//   children:"click me to visit google"
// }


const user="Chai aur Code"; //ex of js variable we use in the jsx which is returned

//writing the structure the way React rendering fn understands
const reactElement=React.createElement( //this method helps inject into root with the help of babel
  'a',
  {href:"https://www.google.com",
    target:"_blank"
  },
  "click me to visit google ",
  user 
)
//varible injection is done at last in the structure
//root.render not only does the above for recieved fn but does many other
//optimization and algorithms making React so powerful

const anotherReactElement=(
<a href="https://www.google.com" target="_blank">Click Here</a>);
//abv is what the function returms which is converted into the tree structure-
// and rendered,so we can directly use abv in root

const root=ReactDOM.createRoot(document.getElementById('myRootElement'));

//the react version of the custom rener fn we wrote
root.render(
  reactElement
)
