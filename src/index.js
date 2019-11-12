import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@athena/forge/static/css/forge.css";
import { Root } from "@athena/forge";
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Root>
      <App />
    </Root>
  </Router>,
  document.getElementById("root")
);
