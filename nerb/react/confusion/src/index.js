import React from 'react';
import ReactDOM from 'react-dom';
// Bootstrap imports before index.css
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
