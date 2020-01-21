import React from 'react';
import CustomButton from "./CustomButton";
import routeTree from "../../utils/routing/routeTree";

const NotFound = () => {
    return (
        <div className="notFound">
            <h2 className="notFound__text">404</h2>

            <CustomButton className="notFound__btn" to={routeTree.main}>Go to main</CustomButton>
        </div>
    );
};

export default NotFound;