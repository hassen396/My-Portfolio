import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header/header.jsx";
import Intro from "./intro/intro.jsx";
import Body from "./body/body.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Body />
    
  </React.StrictMode>
);
