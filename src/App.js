import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact/>
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
