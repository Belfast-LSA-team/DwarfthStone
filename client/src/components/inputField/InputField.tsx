import React, { Fragment } from "react";
import classnames from "classnames";
import { Field } from "react-final-form";

import "./inputfield.css";

type InputFieldProps = {
    className?: string;
    type: string;
    stretch?: boolean;
    name: string;
    placeholder: string;
};

export const InputField = (props: InputFieldProps) => {
    const { className, type, stretch, name, placeholder } = props;

    const inputClassNames = classnames("input-field", {
        "input-field_fullwidth": stretch,
    });

    return (
        <div className={className}>
            <Field name={name}>
                {({ input, meta }) => (
                    <Fragment>
                        <input
                            {...input}
                            className={inputClassNames}
                            type={type}
                            placeholder={placeholder}
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
