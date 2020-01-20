import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import {Router} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import store from "./redux/store";
import history from "./utils/routing/history";


const AppFinal = (
    <Router history={history}>
        <ReduxProvider store={store}>
            <AppContainer/>
        </ReduxProvider>
    </Router>
);


ReactDOM.render(AppFinal, document.getElementById('root'));


