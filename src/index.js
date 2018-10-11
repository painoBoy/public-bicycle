import React from 'react'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css'
import Admin from './admin'
import Home from './pages/react-router/home'
import Router from './pages/react-router/router'

ReactDOM.render(<Admin />, document.getElementById('root'));
registerServiceWorker();
