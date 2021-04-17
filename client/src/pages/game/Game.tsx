import React, { useRef, useEffect, Fragment } from "react";

import Board from "../../gameEngine/Board";

export const Game = (): JSX.Element => {
    return (
        <Fragment>
            <Board />
        </Fragment>
    );
};
