import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import './../style/QRButton.css'
import './../style/Common.css'

class QrButton extends Component {
  constructor(){
    super();
    this.state = {
      qrStr: "math-miki.Task"
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
        <button className="qrbutton" onClick={this.onClick}>{this.props.codeValue}</button>
        <QRCode  value={this.props.codeValue} fgColor={/*"#AFB42B"*/"#FFFFFF"} bgColor={"#000000"}/>
      </div>
    );
  }
}
export default QrButton;
