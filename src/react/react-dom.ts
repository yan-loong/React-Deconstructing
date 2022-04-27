let root: HTMLElement;

const render = (reactElement, container: HTMLElement = root) => {
    let actualDomElement: HTMLElement = document.createElement(reactElement.tag);

    // Clear existing node Before Rerender
    if (root && root.firstChild) {
        root.firstChild.remove();
    }

    // Assign props to element
    if (reactElement.props) {
        Object.keys(reactElement.props).forEach((prop) => {
            actualDomElement[prop] = reactElement.props[prop];
        });
    }

    // Recursively render child Element
    if (reactElement.children) {
        reactElement.children.forEach((child) => {
            if (typeof child === "string" || typeof child === "number") {
                const textNode = document.createTextNode(child.toString());
                actualDomElement.appendChild(textNode);
            } else {
                render(child, actualDomElement);
            }
        });
    }

    // Finally append to DOM
    container.appendChild(actualDomElement);
};

const createRoot = (_root: HTMLElement) => {
    root = _root;
    return { render }
}


export { createRoot, render }