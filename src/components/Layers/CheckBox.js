import React from 'react';
import CheckBoxLib from 'react-simple-checkbox';

const CheckBox = ({value, onChange, ...props}) => {
    return (
        <CheckBoxLib
            className="todoItem__check"
            checked={value}
            color={value ? '#30b81d' : '#17a2b8'}
            size="6"
            tickSize="4"
            onChange={onChange}
            {...props}
        />
    );
};

export default CheckBox;