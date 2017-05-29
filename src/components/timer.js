import React, { Component } from 'react';
// https://www.npmjs.com/package/react-sound
// import bellFile from 'bell.mp3';
// stopped started finished
// this.bell = new Audio(bellFile);
// componentDidMount() { this.bell.play(); }

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 1, status: 'stopped' };
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    this.interval && clearInterval(this.interval);
  }

  changeSeconds = (ev) => {
    this.setState({ seconds: ev.target.value, inputSeconds: this.state.seconds });
  };

  startTimer = () => {
    console.log("startTimer");
    this.setState({ status: 'started' });
    this.interval = this.interval || setInterval(this.tick, 1000);
  };

  pauseTimer = () => {
    console.log("startTimer TODO");
    this.setState({ status: 'paused' });
  };

  tick = () => {
    console.log("tick", this.state.seconds);
    if(this.state.status !== 'started') return;
    this.setState({ seconds: this.state.seconds - 1 });
    if(this.state.seconds <= 0) { this.finish() }
  };

  stopTimer = () => {
    console.log("stopTimer");
  };

  finish = () => {
    this.stopTimer();
    this.setState({ status: 'finished', seconds: this.state.inputSeconds });
  };

  render() {
    const form = () => {
      return (
        <div>
          <input type="number" min="1" autoFocus="true" required="true"
                 value={this.state.seconds}
                 onChange={this.changeSeconds} />
          <label htmlFor="seconds">Seconds</label>
          <button name="start" onClick={this.startTimer}>Start</button>
        </div>
      )
    };

    let result;
    if(this.state.status === 'stopped') {
      result = <div>{form()}</div>

    } else if (this.state.status === 'started') {
      result =
        <div>
          <b>{this.state.seconds}</b>
          <button name="start" onClick={this.pauseTimer}>Pause</button>
        </div>

    } else if (this.state.status === 'finished') {
      result =
        <div>
          <b>DONE</b>
          {form()}
        </div>

    } else if (this.state.status === 'paused') {
      result = <div>{form()}</div>
    } else { result = <div>ERROR</div> }

    return result;
  }
}

export default Timer;
