import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/Index.css';
import App from './asyncLoading/AppLoading';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
