import {combineReducers} from "redux";
import {reducer as toastr} from 'react-redux-toastr';
import item from "./itemReducer";

export default combineReducers({toastr, item});