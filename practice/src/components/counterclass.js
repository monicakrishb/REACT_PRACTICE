import React, { Component } from "react";

class Counterclass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count}times`;
  }
  componentWillUnmount() {
    document.title = `You clicked ${this.state.count}times`;
  }
  render() {
    return (
      <div>
        <p>You clicked{this.state.count}times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click me
        </button>
      </div>
    );
  }
}

export default Counterclass;
