import React from 'react';
import {connect} from "react-redux";
import {addItem} from "../redux/reducers/itemReducer";
import AddTask from "../components/AddTask";
import {useFormik} from "formik";

const AddTaskContainer = ({addItem}) => {
    const initialValues = {title: ''};
    const onSubmit = (val, {resetForm}) => {
        resetForm({});
        addItem(val);
    };
    const formController = useFormik({initialValues, onSubmit});

    return (<AddTask formController={formController}/>);
};

export default connect(null, ({addItem}))(AddTaskContainer);