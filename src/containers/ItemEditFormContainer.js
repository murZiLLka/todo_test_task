import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setItem} from "../redux/reducers/itemReducer";
import ItemEditForm from "../components/ItemEditForm";
import ErrorAlert from "../components/Layers/ErrorAlert";
import {useFormik} from "formik";

const ItemEditFormContainer = ({setItem, itemList, match}) => {
    const itemId = match.params.itemId;
    const itemData = itemList.find(item => item.id === itemId);
    let initialValues = null;


    if (itemData) initialValues = {title: itemData.title, description: itemData.description};
    else initialValues = {title: '', description: ''};

    const formController = useFormik({initialValues, onSubmit:setItem.bind(null,itemId)});

    if (!itemData) return (<ErrorAlert>Item does't exist!</ErrorAlert>);

    return (<ItemEditForm formController={formController}/>);
};

export default connect(({item: {itemList}}) => ({itemList}), ({setItem}))(withRouter(ItemEditFormContainer));
