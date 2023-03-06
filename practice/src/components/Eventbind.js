import React, { Component } from "react";
class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // Binding this allows it to access the state and setstate inside the class
    //  we can use to pass the arguments to a function in the class based components.
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Good",
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
