class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      data: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.data.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);

/*

1. When <Clock /> is passed to root.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time.

2. React then calls the Clock component's render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock's render output.

3. When the clock output is inserted in the DOM, React calls componentDidMount() lifecycle method. Inside it, the Clock component asks the browser to set up a timer to call the component's tick() method once a second.

4. Inside the tick() method, the Clock component schedules a UI update by calling setState() with an object containing the current time. setState() let React know the state has changed and call render() method again to learn what should be on the screen. This time, the state is different, so the render output will include the updated time. React updates the DOM accordingly.

5. If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.


*/
