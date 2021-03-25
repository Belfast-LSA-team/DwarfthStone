import React from "react";
import classnames from "classnames";

import "./title.css";

type TitleProps = {
    text: string;
    className?: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    dark: boolean;
};

export const Title = ({ text, className, level, dark }: TitleProps) => {
    const classNames = classnames("title", `h${level}`, className, {
        title_dark: dark,
    });

const Tag = `h${level}`;

return (
  <Tag className={className}>{text}</Tag>
);
};

Title.defaultProps = {
    dark: false,
};
