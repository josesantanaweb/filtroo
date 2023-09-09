import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { FiltrooBackofficeApp } from "./FiltrooBackofficeApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <FiltrooBackofficeApp />
  </BrowserRouter>,
  document.getElementById("root")
);
