import React from 'react';
import CustomButton from "./Layers/CustomButton";
import {Form} from "react-bootstrap";
import routeTree from "../utils/routing/routeTree";

const ItemEditForm = ({formController}) => {
    return (
        <div className="editItem____wrapper">
            <Form className="editItem" onSubmit={formController.handleSubmit}>
                <Form.Control
                    className="editItem__title"
                    type="text"
                    name="title"
                    value={formController.values.title}
                    onChange={formController.handleChange}
                    placeholder="enter your task"
                    required/>

                <Form.Control
                    className="editItem__description"
                    as={'textarea'}
                    name="description"
                    value={formController.values.description}
                    onChange={formController.handleChange}
                    placeholder="enter your task description"
                    required/>

                <CustomButton className="editItem__btn" type="submit">Finish edit</CustomButton>
                <CustomButton className="editItem__btn" to={routeTree.main}>Back</CustomButton>
            </Form>
        </div>
    );
};

export default ItemEditForm;