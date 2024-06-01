import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header/header.jsx";
import Intro from "./intro/intro.jsx";
import Main from "./main/main.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Main />
    
  </React.StrictMode>
);
