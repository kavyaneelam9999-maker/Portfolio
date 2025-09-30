import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './portfolio_shared_data.json';

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$primaryLanguageIconId = 'primary-lang-icon';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
