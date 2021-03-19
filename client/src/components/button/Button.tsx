import React from "react";

import "./button.css";

type ButtonProps = {
    type: "button" | "submit";
    style: "primary" | "secondary";
    stretch: Boolean;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<ButtonProps> = ({ children, ...otherProps }) => {
    let class_name = "button";

    class_name +=
        otherProps.style === "primary"
            ? " button_primary"
            : " button_secondary";

    class_name += otherProps.stretch ? " button_fullwidth" : "";

    return (
        <button
            className={class_name}
            type={otherProps.type}
            onClick={otherProps.clickHandler}
        >
            {children}
        </button>
    );
};
