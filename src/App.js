import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import "./App.css";

function App() {
  document.title = "Cayman Heng - Web Developer";
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
      </div>
    </Router>
  );
}

export default App;
