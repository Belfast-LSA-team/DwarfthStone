import React from "react";
import classnames from "classnames";

import "./leftsideButton.css";

type LeftsideButtonProps = {
    className?: string;
    dark?: boolean;
    onClick: () => void;
};

export const LeftsideButton = ({
    className,
    dark = false,
    onClick,
}: LeftsideButtonProps) => {
    const classNames = classnames("leftside-button", className, {
        leftsideButton_dark: dark,
    });

    return (
        <button className={classNames} onClick={onClick}>
            <svg
                width="31"
                height="35"
                viewBox="0 0 31 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="1.58579"
                    y1="18.6152"
                    x2="18.6152"
                    y2="1.58579"
                    stroke="black"
                    strokeWidth="4"
                />
                <line
                    x1="18.6151"
                    y1="33.4436"
                    x2="1.5857"
                    y2="16.4142"
                    stroke="black"
                    strokeWidth="4"
                />
                <line
                    x1="11.5858"
                    y1="18.6152"
                    x2="28.6152"
                    y2="1.58579"
                    stroke="black"
                    strokeWidth="4"
                />
                <line
                    x1="28.6151"
                    y1="33.4436"
                    x2="11.5857"
                    y2="16.4142"
                    stroke="black"
                    strokeWidth="4"
                />
            </svg>
        </button>
    );
};
