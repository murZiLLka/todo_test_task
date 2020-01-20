import {createStore} from "redux";
import rootReducer from './reducers';
import {applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const middlewares = [reduxThunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;




