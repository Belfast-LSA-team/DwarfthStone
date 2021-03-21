import React from "react";
import "./spinner.css";

// build here https://loading.io/
// example <Spinner color={"blue"} />

type SpinnerProps = {
    color: "blue" | "orange";
};

export const Spinner = (props: SpinnerProps) => {
    let className = "spinner";
    className += ` ${props.color}`;

    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" stroke="none">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="1.2048192771084336s"
                    repeatCount="indefinite"
                    keyTimes="0;1"
                    values="0 50 51;360 50 51"
                ></animateTransform>
            </path>
        </svg>
    );
};
