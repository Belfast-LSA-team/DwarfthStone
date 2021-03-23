import React from "react";
import classnames from "classnames";
import BoxWrapper from "../../components/boxwrapper";

import "./gamelayout.css";

type GameLayoutProps = {
    children: React.ReactNode;
};

export const GameLayout = (props: GameLayoutProps) => {
    const { children } = props;

    return (
        <React.Fragment>
            <div className="main">
                <div className="background"></div>
                <div className="content">{children}</div>
            </div>
        </React.Fragment>
    );
};
