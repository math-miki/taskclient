import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">進捗, 出てる?</h1>
        </header>
        <p className="App-intro">
          残りのタスクは{10}個ですね!ファイトです.
        </p>
      </div>
    );
  }
}

export default App;
