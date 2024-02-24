
function customRender(reactElement ,container){
    const dom  = document.createElement(reactElement.type);
    // dom.setAttribute('href', reactElement.props.href);
    // dom.setAttribute('target', reactElement.props.target );
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        dom.setAttribute(prop, reactElement.props[prop]);
    }
    dom.innerHTML = reactElement.children;
    container.appendChild(dom);
}

const reactElement = {
    type : 'a',
    props : {
        href : 'http://google.com',
        target : '_blank'
    },
    children : 'Click me for visit google'
}

const main = document.querySelector('#root');

customRender(reactElement, main);