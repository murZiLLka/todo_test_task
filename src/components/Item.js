import React from 'react';
import CheckBox from "./Layers/CheckBox";
import CustomButton from "./Layers/CustomButton";
import NormalMode from "./Modes/NormalMode";
import EditMode from "./Modes/EditMode";

const Item = ({formController, itemData, itemAction, editLink}) => {

    const {title, isDone, id, mode, fullPageLink} = itemData;
    const {toggleItemStatus, toggleItemMode, removeItem} = itemAction;

    const ItemMode = mode === 'edit' ?
        (<EditMode isDone={isDone} formController={formController}/>) :
        (<NormalMode isDone={isDone} title={title} id={id} fullPageLink={fullPageLink}
                     toggleItemMode={toggleItemMode}/>);


    return (
        <div className={`todoItem ${isDone ? 'todoItem_done' : ''}`}>

            <CheckBox disabled={mode === 'edit'} value={isDone} onChange={toggleItemStatus}/>

            {ItemMode}

            <CustomButton className="todoItem__btn" to={editLink} disabled={isDone}>
                <i className="material-icons">
                    insert_drive_file
                </i>
            </CustomButton>

            <CustomButton className="todoItem__btn" onClick={removeItem}>
                <i className="material-icons">
                    delete
                </i>
            </CustomButton>

        </div>
    );
};

export default Item;