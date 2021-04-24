import React from "react";
import { Link } from "react-router-dom";

import "./menu.css";
import {
    menuMain,
    menuAbout,
    menuContact,
    menuForum,
} from "../../data/content";

type MenuProps = {
    color: "transparent" | "blue";
};

export const Menu = ({ color }: MenuProps): JSX.Element => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">{menuMain}</Link>
                </li>
                <li>
                    <Link to="/">{menuAbout}</Link>
                </li>
                <li>
                    <Link to="/">{menuForum}</Link>
                </li>
                <li>
                    <Link to="/contact">{menuContact}</Link>
                </li>
            </ul>
        </nav>
    );
};
