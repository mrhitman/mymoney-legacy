import React from 'react';
import ReactDOM from 'react-dom';
import { init } from './api';
import App from './components/App';
import './index.css';

init();
ReactDOM.render(<App />, document.getElementById('root'));
