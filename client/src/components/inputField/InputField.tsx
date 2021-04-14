import React, { Fragment, RefObject, ReactEventHandler } from "react";
import classnames from "classnames";
import { Field } from "react-final-form";

import "./inputfield.css";

type InputFieldProps = {
    className?: string;
    type: string;
    stretch?: boolean;
    name: string;
    placeholder: string;
    initialValue?: string;
    inputRef?: RefObject<HTMLInputElement>;
    onFocus?: ReactEventHandler<HTMLInputElement>;
    onBlur?: ReactEventHandler<HTMLInputElement>;
};

export const InputField = ({
    className,
    type,
    stretch,
    name,
    placeholder,
    initialValue,
    inputRef,
    onFocus,
    onBlur,
}: InputFieldProps) => {
    const inputClassNames = classnames("input-field", {
        "input-field_fullwidth": stretch,
    });

    return (
        <div className={className}>
            <Field name={name} initialValue={initialValue}>
                {({ input, meta }) => (
                    <Fragment>
                        <input
                            {...input}
                            ref={inputRef}
                            className={inputClassNames}
                            type={type}
                            placeholder={placeholder}
                            onBlur={onBlur}
                            onFocus={onFocus}
                        />
                        {(meta.error || meta.submitError) && meta.touched ? (
                            <span className="input-error">
                                {meta.error || meta.submitError}
                            </span>
                        ) : null}
                    </Fragment>
                )}
            </Field>
        </div>
    );
};
