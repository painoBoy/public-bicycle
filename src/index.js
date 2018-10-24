import React from 'react'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css'
import Admin from './admin'
import Router from './pages/react-router/router'
import IRouter from './router'

ReactDOM.render(<IRouter />, document.getElementById('root'));
registerServiceWorker();
