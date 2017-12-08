import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './style/index.css';
import App from './Components/App';
import QrButton from './Components/QrButton';
import TaskList from './Components/TaskList'
import TasksWithNoAffiliation from './Components/TasksWithNoAffiliation'
import TasksHasAffiliation from './Components/TasksHasAffiliation'
import registerServiceWorker from './registerServiceWorker';
import socket from './socket'

class BodyContent extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <QrButton />
        <TasksWithNoAffiliation />
        <TasksHasAffiliation />
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BodyContent />, document.getElementById('bodyContent'))
registerServiceWorker();
