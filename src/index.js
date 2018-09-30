import React from 'react'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css'
import Admin from './admin'

ReactDOM.render(<Admin />, document.getElementById('root'));
registerServiceWorker();
