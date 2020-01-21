import React from 'react';
import CustomButton from "../Layers/CustomButton";

const NormalMode = ({title, fullPageLink, isDone, toggleItemMode}) => {

    return (
        <>
            <CustomButton className="todoItem__title" {...fullPageLink} disabled={isDone}>{title}</CustomButton>

            <CustomButton className="todoItem__btn" onClick={toggleItemMode} disabled={isDone}>
                <i className="material-icons">
                    edit
                </i>
            </CustomButton>
        </>
    );
};

export default NormalMode;