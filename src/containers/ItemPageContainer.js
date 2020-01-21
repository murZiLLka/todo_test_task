import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import ItemPage from "../components/ItemPage";
import ErrorAlert from "../components/Layers/ErrorAlert";
import routeTree from "../utils/routing/routeTree";

const ItemPageContainer = ({itemList, match}) => {
    const itemId = match.params.itemId;
    const itemData = itemList.find(item => item.id === itemId);

    if (!itemData) return (<ErrorAlert>Item doesn't exist!</ErrorAlert>);

    return (<ItemPage {...itemData} editLink={routeTree.editItem + itemId}/>);
};

ItemPageContainer.propTypes = {itemList: PropTypes.array.isRequired};

export default connect(({item: {itemList}}) => ({itemList}),)(withRouter(ItemPageContainer));
