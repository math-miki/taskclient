import React, { Component } from 'react';
import './../style/App.css';
import QrButton from './QrButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">進捗, 出てる?</h1>
          <QrButton codeValue={this.props.codeValue}/>
        </header>
        <p className="App-intro">
          ねむいねむいねむいねむいねむいねむいねむい
        </p>
      </div>
    );
  }
}

export default App;

//残りのタスクは{10}個ですね!ファイトです.
