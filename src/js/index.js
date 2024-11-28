import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";

import NavBar from "./component/NavBar.jsx";
import Jumbotron from "./component/Jumbotron.jsx";
import CardContainer from "./component/CardContainer.jsx";
import Footer from "./component/Footer.jsx";

ReactDOM.createRoot(document.getElementById("app")).render(
  <>
    <NavBar />
    <Jumbotron />
    <CardContainer />
    <Footer />
  </>
);
