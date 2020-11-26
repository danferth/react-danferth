import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SEO from "../src/components/SEO";
import "./global.output.css";

import { ThemeProvider } from "./util/ThemeContext";

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <SEO title="danferth.dev" />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  root
);
