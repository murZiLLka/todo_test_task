import React from 'react';
import ReactDOM from 'react-dom';
import {Provider as ReduxProvider} from 'react-redux'
import {Router} from 'react-router-dom';
import AppContainer from './containers/AppContainer';
import store from "./redux/store";
import history from "./utils/routing/history";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';

const AppFinal = (
    <Router history={history}>
        <ReduxProvider store={store}>
            <AppContainer/>
        </ReduxProvider>
    </Router>
);

ReactDOM.render(AppFinal, document.getElementById('root'));


