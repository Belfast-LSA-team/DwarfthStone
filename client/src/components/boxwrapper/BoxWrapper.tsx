import React, { Fragment } from "react";
import classnames from "classnames";

import "./boxwrapper.css";

type BoxWrapperProps = {
    className?: string;
    children: React.ReactNode;
};

export const BoxWrapper = (props: BoxWrapperProps) => {
    const { className, children } = props;
    const classNames = classnames("boxwrapper", className);

    return (
        <Fragment>
            <div className={classNames}>{children}</div>
        </Fragment>
    );
};
