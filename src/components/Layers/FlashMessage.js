import React from 'react';
import ReduxToastr from "react-redux-toastr";

const FlashMessage = (props) => {
    return (
        <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates={false}
            position="bottom-right"
            getState={(state) => state.toastr}
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
            {...props}
        />
    );
};

export default FlashMessage;