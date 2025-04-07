import { createRoot } from "react-dom/client";
import "./index.css";
import "@fontsource-variable/azeret-mono";
import "@fontsource-variable/manrope";
import { BrowserRouter } from "react-router";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
