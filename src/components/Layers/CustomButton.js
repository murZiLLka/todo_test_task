import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const CustomButton = (props) => {
    const {
        type = Link,
        variant = 'outline-info',
        to = '/',
        children = 'Button',
        onClick = false,
        ...other
    } = props;


    switch (true) {
        case typeof onClick === "function":
            return (<Button {...other} variant={variant} onClick={onClick}>{children}</Button>);

        case type === 'submit':
            return (<Button {...other} variant={variant} type='submit'>{children}</Button>);

        //functionality can be expanded

        default:
            return (<Button {...other} as={type} to={to} variant={variant}>{children}</Button>);
    }

};

export default CustomButton;