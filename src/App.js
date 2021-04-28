import React, { Component } from "react";
import Renderer from "./scripts/renderer";
import Keyboard from "./scripts/keyboard";
import Speaker from "./scripts/speaker";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.renderer = React.createRef();
    this.keyboard = React.createRef();
    this.speaker = React.createRef();
    this.state = {
      loop: "",
      fps: 60,
      fpsInterval: "",
      startTime: "",
      now: "",
      then: "",
      elapsed: "",
    };
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    this.setState({
      fpsInterval: 1000 / this.state.fps,
      then: Date.now(),
      startTime: Date.now(),
    });

    this.setState({
      loop: requestAnimationFrame(this.step),
    });
  };

  step = () => {
    this.setState({
      now: Date.now(),
      elapsed: Date.now() - this.state.then,
    });

    if (this.state.elapsed > this.state.fpsInterval) {
      // Cycle the CPU. We'll come back to this later and fill it out.
    }

    this.setState({
      loop: requestAnimationFrame(this.step),
    });
  };

  handleTest = () => {
    this.renderer.current.testRender();
    this.renderer.current.renderScreen();
  };

  render = () => {
    return (
      <div>
        <Renderer ref={this.renderer} />
        <Keyboard ref={this.keyboard} />
        <Speaker ref={this.speaker} />
        <button onClick={this.handleTest}>Test</button>
      </div>
    );
  };
}

export default App;
