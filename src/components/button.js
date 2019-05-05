import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="button-container">
      <button onClick={this.props.addData}>{this.props.text}</button>
      </div>
    )
  }
}

export default Button;
