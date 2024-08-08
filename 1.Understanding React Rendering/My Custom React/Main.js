//custom rendering function
function CustomRender(reactElement,container){
//   const domElement=document.createElement(reactElement.type);
//   domElement.innerHTML=reactElement.children;
//   domElement.setAttribute('href',reactElement.props.href);
//   container.appendChild(domElement);

domElement=document.createElement(reactElement.type);
domElement.innerHTML=reactElement.children;
for (const prop in reactElement.props) {
    if(prop==="children")continue;
    domElement.setAttribute(prop,reactElement.props[prop]);
}
container.appendChild(domElement);
}

const reactElement={   
    //this is the form in which react works on the function we return to it(from App.jsx)
    //after transpiling (sort of) via toolchain such as babel
    //other than creating this structure it also helps to correct and upgrade the syntax
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank",
    },
    children:"click me to visit google"
}
//for creating abv structure which react can understand we have to use React.createElement() method and its
//syntax
const mainContainer=document.getElementById("root");

CustomRender(reactElement,mainContainer)
