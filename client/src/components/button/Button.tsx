import React from "react";
import classnames from "classnames";

import "./button.css";

type ButtonProps = {
    className?: string;
    type: "button" | "submit" | "reset";
    style: "primary" | "secondary";
    stretch?: boolean;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
    const { className, type, style, stretch, clickHandler, children } = props;
    const classNames = classnames("button", `button_${style}`, className, {
        button_fullwidth: stretch,
    });

    return (
        <button className={classNames} type={type} onClick={clickHandler}>
            {children}
        </button>
    );
};
