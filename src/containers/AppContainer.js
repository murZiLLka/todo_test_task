import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {setItemList} from "../redux/reducers/itemReducer";
import {Redirect, Route, Switch} from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import FlashMessage from "../components/Layers/FlashMessage";
import AddTaskContainer from "./AddTaskContainer";
import ItemPageContainer from "./ItemPageContainer";
import ItemEditFormContainer from "./ItemEditFormContainer";
import NotFound from "../components/Layers/NotFound";
import {itemListLocalStorage} from "../utils/generalWorkers";
import routeTree from "../utils/routing/routeTree";
import itemList from '../server/itemList';


const AppContainer = ({setItemList}) => {

    useEffect(() => {
        itemListLocalStorage(itemList);

        //itemListLocalStorage(generateItemObjects(15));
        // We can generate random list every page load

        //setItemList(generateItemObjects(15))
        // We can set itemList without localStorage

    }, [setItemList]);

    return (
        <div className="App">

            <h1>ToDo List</h1>
            <FlashMessage/>

            <Switch>
                <Route exact path={routeTree.main}>
                    <ItemListContainer/>
                    <AddTaskContainer/>
                </Route>
                <Route path={routeTree.fullItem + ':itemId'} exact component={ItemPageContainer}/>
                <Route path={routeTree.editItem + ':itemId'} exact component={ItemEditFormContainer}/>
                <Route path={routeTree.notFound} component={NotFound}/>
                <Redirect to={routeTree.notFound}/>
            </Switch>

        </div>
    );
};

AppContainer.propTypes = {
    setItemList: PropTypes.func.isRequired,
};

export default connect(null, ({setItemList}))(AppContainer);