import React from "react";

import { footerMessage } from "../../data/content";
import "./footer.css";

type FooterProps = {
    color: "transparent" | "dark";
};

export const Footer = ({ color }: FooterProps): JSX.Element => {
    return (
        <footer className={`footer footer_${color}`}>
            <div className="footer-content">
                <div className="footer-content__allrights">
                    <p>{footerMessage}</p>
                </div>
            </div>
        </footer>
    );
};
