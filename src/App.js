import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import Monogram from "./components/Monogram";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Monogram />
      </div>
    </Router>
  );
}

export default App;
