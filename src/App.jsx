import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div id="container">
      <Navbar />
      <MainContainer />
    </div>
  );
}

export default App;
