import App from "./components/app";
import { createRoot } from "./react/react-dom";

const root = createRoot(document.querySelector("#root"));
root.render(App());
