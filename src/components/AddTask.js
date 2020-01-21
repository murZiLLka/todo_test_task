import React from 'react';
import CustomButton from "./Layers/CustomButton";
import {Form} from "react-bootstrap";

const AddTask = ({formController}) => {
    return (
        <div className="addItem__wrapper">
            <Form className="addItem" onSubmit={formController.handleSubmit}>
                <Form.Control
                    className="addItem__title"
                    type="text"
                    name="title"
                    value={formController.values.title}
                    onChange={formController.handleChange}
                    placeholder="enter your task"
                    minLength="5"
                    required/>

                <CustomButton className="addItem__btn" type="submit">
                    <i className="material-icons">
                        add_circle
                    </i>
                </CustomButton>
            </Form>
        </div>
    );
};

export default AddTask;