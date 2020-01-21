import React from 'react';
import {connect} from "react-redux";
import ItemContainer from "./ItemContainer";
import ErrorAlert from "../components/Layers/ErrorAlert";
import {isNotEmptyArray} from "../utils/generalWorkers";

const ItemListContainer = ({itemList}) => {

    if (!isNotEmptyArray(itemList)) {
        return (<ErrorAlert disableButton={true}>ToDo list is empty! Add something...</ErrorAlert>);
    }

    return (
        <div className="itemList">
            {itemList.map(item => (<ItemContainer key={item.id} itemData={item}/>))}
        </div>
    );
};

export default connect(({item: {itemList}}) => ({itemList}))(ItemListContainer);