import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Footer from "./layouts/Footer/Footer";

function App() {
  return (
    <div className='content'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
