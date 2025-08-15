function customRender(reactElement, container) {

    // Create an Element

    const domElem = document.createElement(reactElement.type);
    domElem.innerHTML = reactElement.children;
    for (prop in reactElement.props) {
        console.log(prop, reactElement.props[prop])
        domElem.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElem);
    
    
    /* General way

    let domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    container.appendChild(domElement);
    */
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: `<h3>Click Me to visit Google</h3>`
}

// Get reference of root;
let mainContainer = document.getElementById('root');
console.log(mainContainer);

customRender(reactElement, mainContainer);