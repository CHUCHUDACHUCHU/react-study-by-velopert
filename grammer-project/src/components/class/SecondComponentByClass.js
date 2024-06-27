import React, { Component } from "react";

class SecondComponentByClass extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span>SecondComponentByClass</span>
        <p>This is SecondComponentByFunc props</p>
        <p>{JSON.stringify(this.props)}</p>
      </div>
    );
  }
}

export default SecondComponentByClass;
