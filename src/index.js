import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import QrButton from './QrButton';
import TaskList from './TaskList'
import TasksWithNoAffiliation from './TasksWithNoAffiliation'
import TasksHasAffiliation from './TasksHasAffiliation'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<QrButton />, document.getElementById('QRButton'))
ReactDOM.render(<TasksWithNoAffiliation />, document.getElementById('tasksWithNoAffiliation'))
ReactDOM.render(<TasksHasAffiliation />, document.getElementById('tasksHasAffiliation'))
registerServiceWorker();
