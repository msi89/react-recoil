import React from "react";
import "./styles.css";
import { RecoilRoot } from "recoil";
import { Home } from "./views/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </RecoilRoot>
  );
}
