import React from "react";
import Menu from "./Menu";
import HomePage from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
