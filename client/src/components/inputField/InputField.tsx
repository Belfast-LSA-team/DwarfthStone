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
    error?: string;
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
        error,
    } = props;

    const inputClassNames = classnames("input-field", {
        "input-field_fullwidth": stretch,
    });

    return (
        <div className={className}>
            <input
                className={inputClassNames}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            <span className="input-error">{error}</span>
        </div>
    );
};
