import React from 'react';
import CustomButton from "./Layers/CustomButton";
import routeTree from "../utils/routing/routeTree";

const ItemPage = ({title, description, editLink}) => {

    return (
        <div className="itemPage">
            <div className="itemPage__title">{title}</div>
            <div className="itemPage__description">{description || 'Empty... Add description firstly!'}</div>
            <CustomButton className="itemPage__btn" to={editLink}>Edit</CustomButton>
            <CustomButton className="itemPage__btn" to={routeTree.main}>Back</CustomButton>
        </div>
    );
};

export default ItemPage