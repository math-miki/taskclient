import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './Components/App';
import QrButton from './Components/QrButton';
import TaskList from './Components/TaskList'
import TasksWithNoAffiliation from './Components/TasksWithNoAffiliation'
import TasksHasAffiliation from './Components/TasksHasAffiliation'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<QrButton />, document.getElementById('QRButton'))
ReactDOM.render(<TasksWithNoAffiliation />, document.getElementById('tasksWithNoAffiliation'))
ReactDOM.render(<TasksHasAffiliation />, document.getElementById('tasksHasAffiliation'))
registerServiceWorker();
