import React from "react";
import classnames from "classnames";

import "./inputfield.css";

type InputFieldProps = {
    className?: string;
    type: "text" | "password" | "number" | "email";
    stretch?: boolean;
    name: string;
    value: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const InputField = (props: InputFieldProps) => {
    const {
        className,
        type,
        stretch,
        name,
        value,
        placeholder,
        onChange,
    } = props;

    const classNames = classnames("input-field", className, {
        "input-field_fullwidth": stretch,
    });

    return (
        <input
            className={classNames}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};
