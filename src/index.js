import React from "react";
import ReactDOM from "react-dom/client";
import Todolist from "./Todolist";
import "./Todolist.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Todolist />
  </React.StrictMode>
);
