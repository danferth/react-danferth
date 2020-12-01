import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SEO from "../src/components/SEO";
import "./global.output.css";

const root = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <SEO title="danferth" />
    <App />
  </React.StrictMode>,
  root
);
