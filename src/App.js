import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Image from "./assets/img";
import Info from "./components/info";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Image />
        <Info />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
