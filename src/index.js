import React from 'react'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css'
import Admin from './admin'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore';
import IRouter from './router'
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <IRouter />
    </Provider>,document.getElementById('root'));
registerServiceWorker();
