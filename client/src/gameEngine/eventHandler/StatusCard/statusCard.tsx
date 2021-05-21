import React from "react";

import "./status.css";
import StatusImg from "../../assets/images/game/status.png";

export type StatusProps = {
    top: number;
    left: number;
    isActive: boolean;
};

export const StatusCard = ({ top, left, isActive }: StatusProps) => {
    return (
        <div
            className="status"
            style={{
                top: `${top}px`,
                left: `${left}px`,
                display: `${isActive ? "block" : "none"}`,
            }}
        >
            <img src={StatusImg} alt="" />
        </div>
    );
};
