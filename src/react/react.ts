import App from "../components/app";
import { render } from "./react-dom";

const React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag === "function") {
            tag(props);
            return;
        } else {
            const element = { tag, props, children };
            return element;
        }
    },
};

const states = [];
let stateCursor = 0;

const useState = (initialState) => {
    const currentCursor = stateCursor;
    states[currentCursor] = states[currentCursor] || initialState;

    const setState = (newState) => {
        states[currentCursor] = newState;
        stateCursor = 0;
        reRender();
    };
    stateCursor += 1;

    return [states[currentCursor], setState];
};


const reRender = () => {
    render(App());
};


export { useState }
export default React;