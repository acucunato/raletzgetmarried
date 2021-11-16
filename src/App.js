import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
