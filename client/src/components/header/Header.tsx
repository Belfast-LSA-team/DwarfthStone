import React from "react";
import { Link } from "react-router-dom";

import { LogoHeader } from "../logos/Logo";
import { menuLogin, menuRegister, menuStart } from "../../data/content";
import withAuth from "../../components/withAuth";
import "./header.css";
import Menu from "../menu";
type HeaderProps = {
    color: "transparent" | "blue";
    isAuth: boolean;
};

export const Header = ({ color, isAuth }: HeaderProps): JSX.Element => {
    const menu = isAuth ? (
        <li>
            <Link to="/start">{menuStart}</Link>
        </li>
    ) : (
        <>
            <li>
                <Link to="/login"> {menuLogin}</Link>
            </li>
            <li>
                <Link to="/register">{menuRegister} </Link>
            </li>
        </>
    );

    return (
        <header className={`type-${color}`}>
            <div className="header-content">
                <div className="header-content__logo-menu">
                    <LogoHeader />
                    <Menu color={color} />
                </div>
                <div className="header-content__menu">
                    <ul>{menu}</ul>
                </div>
            </div>
        </header>
    );
};

export default withAuth(Header);
