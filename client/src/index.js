import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { init } from './api';

init();
ReactDOM.render(<App />, document.getElementById('root'));
