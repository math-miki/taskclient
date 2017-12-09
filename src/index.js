import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './style/index.css';
import App from './Components/App';
import TasksWithNoAffiliation from './Components/TasksWithNoAffiliation'
import TasksHasAffiliation from './Components/TasksHasAffiliation'
import registerServiceWorker from './registerServiceWorker';
import socket from './socket'
import myStore from './myStore'
import Action from './Action'


class BodyContent extends Component {
  constructor() {
    super();
    myStore.gotQRCODE = () => {
      this.setState({qrcodeValue: String(myStore.codeValue)})
    }
    this.state = {
      tasksWA: [
        ["前半","あいうえお", "かきくけこ", "さしすせそ", "たちつてと", "なにぬねの"],
        ["後半", "はひふへほ", "まみむめも", "やゆよ", "らりるれろ", "わをん"],
        ["アルファベット", "abcdefg", "hijklmn", "opqrstu", "vwxyz"],
        ["alphabet", "ABCDEFG", "HIJKLMN", "OPQRSTU", "VWXYZ"]
      ],
      tasksWNA: ["あいうえお", "かきくけこ", "さしすせそ", "たちつてと", "なにぬねの"],
      qrcodeValue: myStore.codeValue
    }
  }
  render() {
    return (
      <div>
        <App codeValue={this.state.qrcodeValue}/>
        <TasksHasAffiliation tasks={this.state.tasksWA} />
        <TasksWithNoAffiliation tasks={this.state.tasksWNA}/>
      </div>
      )
    }
}

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BodyContent />, document.getElementById('bodyContent'))
registerServiceWorker();
