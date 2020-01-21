import React from 'react';
import CustomButton from "../Layers/CustomButton";
import {Form} from "react-bootstrap";

const EditMode = ({isDone, formController}) => {
    return (
        <Form className="todoItem__edit" onSubmit={formController.handleSubmit}>
            <Form.Control
                className="todoItem__title"
                type="text"
                name="title"
                value={formController.values.title}
                onChange={formController.handleChange}
                disabled={isDone}
                placeholder="enter your task"
                required/>

            <CustomButton className="todoItem__btn" type="submit" disabled={isDone}>
                <i className="material-icons">
                    done
                </i>
            </CustomButton>
        </Form>

    );
};

export default EditMode;