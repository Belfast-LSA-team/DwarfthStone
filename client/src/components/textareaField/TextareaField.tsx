import React, { Fragment, RefObject, ReactEventHandler } from "react";
import classnames from "classnames";
import { Field } from "react-final-form";

import "./textareafield.css";

type InputFieldProps = {
    className?: string;
    rows?: number;
    stretch?: boolean;
    name: string;
    placeholder: string;
    initialValue?: string;
    inputRef?: RefObject<HTMLTextAreaElement>;
    onFocus?: ReactEventHandler<HTMLTextAreaElement>;
    onBlur?: ReactEventHandler<HTMLTextAreaElement>;
};

export const TextareaField = ({
    className,
    rows,
    stretch,
    name,
    placeholder,
    initialValue,
    inputRef,
    onBlur,
    onFocus,
}: InputFieldProps) => {
    const inputClassNames = classnames("input-field", {
        "input-field_fullwidth": stretch,
    });

    return (
        <div className={className}>
            <Field name={name} initialValue={initialValue}>
                {({ input, meta }) => (
                    <Fragment>
                        <textarea
                            rows={rows}
                            {...input}
                            ref={inputRef}
                            className={inputClassNames}
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
