import React from "react";
import { Link } from "react-router-dom";

import { LogoHeader } from "../logos/Logo";
import { menuLogin, menuRegister } from "../../data/content";
import "./header.css";
import Menu from "../menu";
type HeaderProps = {
    color: "transparent" | "blue";
};

export const Header = ({ color }: HeaderProps): JSX.Element => {
    return (
        <header className={`type-${color}`}>
            <div className="header-content">
                <div className="header-content__logo-menu">
                    <LogoHeader />
                    <Menu color={color} />
                </div>
                <div className="header-content__menu">
                    <ul>
                        <li>
                            <Link to="/login"> {menuLogin}</Link>
                        </li>
                        <li>
                            <Link to="/register">{menuRegister} </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
