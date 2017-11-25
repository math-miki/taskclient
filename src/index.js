import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import QrButton from './QrButton';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<QrButton />, document.getElementById('QRButton'))
registerServiceWorker();
