import React from "react";

import "./sword.css";
import SwordImg from "../../assets/images/game/sword.png";

export type SwordProps = {
    top: number;
    left: number;
    isActive: boolean;
};

export const Sword = ({ top, left, isActive }: SwordProps) => {
    return (
        <div className="sword">
            <div
                className="sword__item"
                style={{
                    top: `${top}px`,
                    left: `${left}px`,
                    display: `${isActive ? "block" : "none"}`,
                }}
            >
                <img src={SwordImg} alt="" />
            </div>
        </div>
    );
};
