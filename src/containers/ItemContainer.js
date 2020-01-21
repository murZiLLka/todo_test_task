import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {setItem, removeItem, toggleItemStatus, toggleItemMode} from "../redux/reducers/itemReducer";
import Item from "../components/Item";
import {useFormik} from 'formik';
import routeTree from "../utils/routing/routeTree";

const ItemContainer = ({itemData, setItem, removeItem, toggleItemStatus, toggleItemMode}) => {

    const initialValues = {title: itemData.title};
    const formController = useFormik({initialValues, onSubmit: setItem.bind(null, itemData.id)});
    const itemAction = {
        removeItem: () => removeItem(itemData.id),
        toggleItemStatus: () => toggleItemStatus(itemData.id, itemData.isDone),
        toggleItemMode: () => toggleItemMode(itemData.id)
    };

    itemData.fullPageLink = {variant: 'light', to: routeTree.fullItem + itemData.id, size: 'lg'};

    return (
        <Item
            formController={formController}
            itemData={itemData}
            itemAction={itemAction}
            editLink={routeTree.editItem + itemData.id}
        />
    );
};

ItemContainer.propTypes = {
    itemData: PropTypes.object.isRequired,
    removeItem: PropTypes.func.isRequired,
    setItem: PropTypes.func.isRequired,
    toggleItemStatus: PropTypes.func.isRequired,
    toggleItemMode: PropTypes.func.isRequired,

};

export default connect(null, ({removeItem, setItem, toggleItemStatus, toggleItemMode}))(ItemContainer);