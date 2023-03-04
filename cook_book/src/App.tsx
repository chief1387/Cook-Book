import "./App.css";
import Navbar from "./navbar/Navbar";
import Body from "./body/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Body />
      </BrowserRouter>
    </div>
  );
}

export default App;
