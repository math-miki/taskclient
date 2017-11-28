import React, { Component } from 'react';
import QRCode from 'qrcode.react';

class QrButton extends Component {
  constructor(){
    super();
    this.state = {
      qrStr: "aiu"
    }
    this.onClick = this.onClick.bind(this);
  };
  onClick(){
    this.setState({
      qrStr: this.state.qrStr += "aiu"
    })
  }
  render() {
    return (
      <div className="QrButton">
        <button onClick={this.onClick}>refresh QRCode</button>
        <QRCode  value={this.state.qrStr} />
      </div>
    );
  }
}
export default QrButton;
