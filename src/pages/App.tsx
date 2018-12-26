import * as React from "react";
import "./App.css";
import { Component } from "react";
import logo from "./logo.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ScrollAnimation animateIn="heartBeat" animateOut="fadeout">
            <h1>hello world</h1>
          </ScrollAnimation>
        </header>
      </div>
    );
  }
}

export default App;
