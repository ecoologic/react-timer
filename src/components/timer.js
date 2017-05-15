import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { seconds: 3 };
  }

  componentWillUnmount() {
    console.log("componentWillUnmount", this);
    this.stopTimer();
  }

  startTimer = () => {
    console.log("startTimer", this); // this.state.seconds
    this.interval = setInterval(() => {
      console.log("tick", this.state.seconds);
      this.setState({ seconds: this.state.seconds - 1 });
      if(this.state.seconds <= 0) {
        this.stopTimer();
        this.setState({ finishMessage: "DONE!" });
      }
    }, 1000)
  }

  stopTimer = () => {
    this.interval && clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <b>Timer</b>
        <input type="number" min="1" autoFocus="true" required="true"
               value={this.state.seconds}
               onChange={ev => { this.setState({ seconds: ev.target.value })}} />
        <label htmlFor="seconds">Seconds</label>
        <button name="start" onClick={this.startTimer}>Start</button>
        <b>{this.state.finishMessage}</b>
      </div>
    )
  }
}

export default Timer;
