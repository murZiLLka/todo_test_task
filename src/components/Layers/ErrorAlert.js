import React from 'react';
import CustomButton from "./CustomButton";
import {Alert} from "react-bootstrap";
import routeTree from "../../utils/routing/routeTree";

const ErrorAlert = ({children, disableButton = false}) => {
    const BackButton = disableButton ?
        null : (<CustomButton className="errorAlert__btn" to={routeTree.main}>Back to toDo list</CustomButton>);

    return (
        <div className="errorAlert">
            <Alert className="errorAlert__text" variant="danger">
                {children}
            </Alert>

            {BackButton}

        </div>
    );
};

export default ErrorAlert;