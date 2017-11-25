import React, { Component } from 'react';

class QrButton extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
    this.onClick = this.onClick.bind(this);
  };
  onClick(){
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div className="QrButton">
        <button onClick={this.onClick}>{this.state.count}</button>
      </div>
    );
  }
}
export default QrButton;
