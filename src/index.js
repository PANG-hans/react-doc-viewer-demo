import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import MyComponent from "./MyApp";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<MyComponent />);
