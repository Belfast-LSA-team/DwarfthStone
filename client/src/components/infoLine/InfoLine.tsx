import React from "react";
import classnames from "classnames";

import "./infoLine.css";

type InfoLineProps = {
    className?: string;
    name: string;
    value: string;
    dark?: boolean;
};

export const InfoLine = ({
    className,
    name,
    value,
    dark = false,
}: InfoLineProps) => {
    const classNames = classnames("info-line", className, {
        "info-line_dark": dark,
    });

    return (
        <div className={classNames}>
            <span className="info-line__name">{name}</span>
            <span className="info-line__value">{value}</span>
        </div>
    );
};
