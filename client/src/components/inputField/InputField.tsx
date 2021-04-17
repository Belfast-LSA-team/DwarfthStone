import React, { Fragment, RefObject, ReactEventHandler } from "react";
import classnames from "classnames";
import { Field } from "react-final-form";

import "./inputfield.css";

type InputFieldProps = {
    className?: string;
    type?: string;
    rows?: string;
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
    rows,
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
            <Field name={name}>
                {rows
                    ? ({ input, meta }) => (
                          <div className="textarea-wrapper">
                              <textarea
                                  {...input}
                                  className={inputClassNames}
                                  rows={+rows}
                                  placeholder={placeholder}
                              ></textarea>
                              {(meta.error || meta.submitError) &&
                              meta.touched ? (
                                  <span className="input-error">
                                      {meta.error || meta.submitError}
                                  </span>
                              ) : null}
                          </div>
                      )
                    : ({ input, meta }) => (
                          <Fragment>
                              <input
                                  {...input}
                                  className={inputClassNames}
                                  type={type}
                                  placeholder={placeholder}
                              />
                              {(meta.error || meta.submitError) &&
                              meta.touched ? (
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
