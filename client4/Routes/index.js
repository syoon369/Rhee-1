import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {createStore} from 'redux'
import {Provider} from "react-redux";
import loginReducer from './Redux/loginReducer'

const store = createStore(loginReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));