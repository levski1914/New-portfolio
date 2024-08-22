import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Header from "./component/Header";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab, fas, far);
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <About />
      </BrowserRouter>
    </>
  );
}

export default App;
