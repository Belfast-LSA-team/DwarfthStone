import React from "react";
import classnames from "classnames";

import "./boxwrapper.css";

type BoxWrapperProps = {
    className?: string;
    isModal: boolean;
    children: React.ReactNode;
};

export const BoxWrapper = (props: BoxWrapperProps) => {
    const { className, isModal, children } = props;
    const classNames = classnames("boxwrapper", className);

    return (
        <React.Fragment>
            <div className={classNames}>{children}</div>
        </React.Fragment>
    );
};
