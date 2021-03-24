import React from "react";
import classnames from "classnames";

import "./title.css";

type TitleProps = {
    text: string;
    className?: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    dark: boolean;
};

export const Title = (props: TitleProps) => {
    const { text, className, level, dark } = props;
    const classNames = classnames("title", `h${level}`, className, {
        title_dark: dark,
    });

    switch (level) {
        case 1:
            return <h1 className={classNames}>{text}</h1>;
        case 2:
            return <h2 className={classNames}>{text}</h2>;
        case 3:
            return <h3 className={classNames}>{text}</h3>;
        case 4:
            return <h4 className={classNames}>{text}</h4>;
        case 5:
            return <h5 className={classNames}>{text}</h5>;
        case 6:
            return <h6 className={classNames}>{text}</h6>;
        default:
            return null;
    }
};

Title.defaultProps = {
    dark: false,
};
