import React, { Fragment } from "react";

import "./gamelayout.css";

type GameLayoutProps = {
    children: React.ReactNode;
};

export const GameLayout = (props: GameLayoutProps) => {
    const { children } = props;

    return (
        <Fragment>
            <div className="main">
                <div className="content">{children}</div>
            </div>
        </Fragment>
    );
};
