import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./App.css";

function App() {
  document.title = "Cayman Heng - Web Developer";
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
