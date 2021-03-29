import React, { ReactNode } from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";

import "./siteLayout.css";

type SiteInterface = {
    children: ReactNode;
    bgColor: "important" | "secondary";
};

export const SiteLayout = ({
    children,
    bgColor,
}: SiteInterface): JSX.Element => {
    return (
        <div className={`global ${bgColor}`}>
            <div className="global__inner">
                <Header color={"blue"} />
                {children}
                <Footer color={"blue"} />
            </div>
        </div>
    );
};
