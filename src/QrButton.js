import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import './style/QRButton.css'
import './style/Common.css'

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
      <div className="QrButton clearfix">
        <button className="qrbutton" onClick={this.onClick}>refresh QRCode</button>
        <QRCode  value={this.state.qrStr} fgColor={"#AFB42B"} />
      </div>
    );
  }
}
export default QrButton;
