import {toastr} from 'react-redux-toastr'
import ItemObject from "../../utils/constructors/ItemObject";
import history from "../../utils/routing/history";
import routeTree from "../../utils/routing/routeTree";
import {itemListLocalStorage} from "../../utils/generalWorkers";

const TOGGLE_ITEM_STATUS = 'itemReducer/TOGGLE_ITEM_STATUS';
const TOGGLE_ITEM_MODE = 'itemReducer/TOGGLE_ITEM_MODE';
const MODE_NORMAL = 'itemReducer/MODE_NORMAL';
const SET_ITEM = 'itemReducer/SET_ITEM';
const REMOVE_ITEM = 'itemReducer/REMOVE_ITEM';
const ADD_ITEM = 'itemReducer/ADD_ITEM';
const SET_ITEM_LIST = 'itemReducer/SET_ITEM_LIST';


const initialState = {itemList: itemListLocalStorage()};

export default (state = initialState, action) => {

    switch (action.type) {

        case ADD_ITEM: {
            const {payload: newItem} = action;

            return {...state, itemList: [...state.itemList, newItem]};
        }

        case REMOVE_ITEM: {
            const {payload: {itemId}} = action;

            return {...state, itemList: state.itemList.filter(el => el.id !== itemId)};
        }

        case SET_ITEM: {
            const {payload: {itemId, itemText: {title, description}}} = action;

            return {
                ...state,
                itemList: state.itemList.map(item => item.id === itemId ?
                    ({...item, title, description: description ? description : item.description}) : item)
            };
        }

        case SET_ITEM_LIST: {
            const {payload: itemList} = action;

            return {...state, itemList};
        }

        case TOGGLE_ITEM_STATUS: {
            const {payload: {itemId}} = action;

            return {
                ...state,
                itemList: state.itemList.map(item => item.id === itemId ? ({...item, isDone: !item.isDone}) : item)
            };
        }

        case TOGGLE_ITEM_MODE: {
            const {payload: {itemId}} = action;

            return {
                ...state,
                itemList: state.itemList.map(item => item.id === itemId ?
                    ({...item, mode: item.mode === 'edit' ? 'normal' : "edit"}) : item)
            };
        }

        case MODE_NORMAL: {
            const {payload: {itemId}} = action;

            return {
                ...state,
                itemList: state.itemList.map(item => item.id === itemId ?
                    ({...item, mode: item.mode = 'normal'}) : item)
            };
        }

        default: {
            return state;
        }
    }
};

export const addItem = itemText => dispatch => {
    try {
        const newItem = new ItemObject(itemText.title);

        dispatch({type: ADD_ITEM, payload: newItem});

        return toastr.success('Done', 'Task was created!');

    } catch (e) {
        return toastr.error('Error', 'Something went wrong!');
    }
};

export const removeItem = itemId => dispatch => {
    try {
        dispatch({type: REMOVE_ITEM, payload: {itemId}});

        return toastr.success('Done', 'Task was removed!');

    } catch (e) {
        return toastr.error('Error', 'Something went wrong!');
    }
};

export const setItem = (itemId, itemText) => dispatch => {
    try {
        dispatch({type: SET_ITEM, payload: {itemId, itemText}});

        dispatch(modeNormal(itemId));

        if (itemText.description) history.push(routeTree.main);

        return toastr.success('Done', 'Task was created/updated!');

    } catch (e) {
        dispatch(modeNormal(itemId));

        return toastr.error('Error', 'Something went wrong!');
    }
};

export const setItemList = (itemList) => ({type: SET_ITEM_LIST, payload: itemList});

export const toggleItemStatus = (itemId, isDone) => dispatch => {
    try {
        dispatch(modeNormal(itemId));
        dispatch({type: TOGGLE_ITEM_STATUS, payload: {itemId, isDone}});

        if (isDone === false) return toastr.success('Congratulations', 'Task was finished!');
        else return toastr.warning('Do you need more time?', 'Do not be late for completing tasks');

    } catch (e) {
        dispatch(modeNormal(itemId));

        return toastr.error('Error', 'Something went wrong!');
    }
};

export const toggleItemMode = itemId => ({type: TOGGLE_ITEM_MODE, payload: {itemId}});

export const modeNormal = itemId => ({type: MODE_NORMAL, payload: {itemId}});

