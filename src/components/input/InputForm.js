/* eslint-disable no-unneeded-ternary */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const InputForm = props => {
    const { size,
        password,
        name,
        label,
        placeholder,
        id,
        handleChange,
        children,
        rules,
        required,
        value,
        disabled,
        ...rest } = props;
    let rulesInput = rules ? rules : [];
    if (required) {
        rulesInput.push({
            message: 'Valor requerido!',
            required: true
        });
    }
    return (
        <Form.Item name={name == null ? id : name}
            initialValue={value } 
            label={label}
            rules={rulesInput}>
            {password ?
                (<Input.Password id={id}
                    placeholder={placeholder}
                    onChange={handleChange}
                    size={size}
                    disabled={disabled} />)
                :
                (<Input id={id}
                    placeholder={placeholder}
                    onChange={handleChange}
                    size={size}
                    disabled={disabled} />)}
        </Form.Item>
    );
};

InputForm.defaultProps = {
    size: 'small',
};

InputForm.propTypes = {
    size: PropTypes.oneOf(['small', 'default', 'large']),
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    handleChange: PropTypes.func,
    rules: PropTypes.array,
    required: PropTypes.bool,
    password: PropTypes.bool,
};

export { InputForm };

