



class Timer extends React.createClass(
  getInitialState() {
    return { elapsed: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ elapsed: new Date() - this.props.start });
  }

  start() {

  }

  render() {
    const elapsed = Math.round(this.state.elapsed / 100);
    const seconds = (elapsed / 10).toFixed(1);

    return (
      <div>
        <b>Timer</b>
        <input name="duration" autoFocus="true" type="number" min="1"
               value={seconds}
               onChange={seconds} />
        <label htmlFor="duration">Seconds</label>
        <button name="start" onClick={this.start}>Start</button>
      </div>
    );
  }
);

export default Timer;
