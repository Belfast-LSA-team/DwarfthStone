import React from "react";
import { useHistory } from "react-router-dom";
import "./homepage.css";

import homeImg from "../../assets/images/GameMedia.png";
import { SiteLayout } from "../../layouts/SiteLayout/SiteLayout";
import { LogoHome } from "../../components/logos/Logo";
import Button from "../../components/button";
import {
    homeDescription,
    darkButtonHomeLabel,
    lightButtonHomeLabel,
} from "../../data/content";

export const Homepage = () => {
    const history = useHistory();

    const contactUsHandler = () => {
        history.push("/contact");
    };
    const donateHandler = () => {
        history.push("/donate");
    };
    return (
        <SiteLayout bgColor={"important"}>
            <div className="home-content">
                <div className="home-content__image">
                    <img src={homeImg} alt="home-cards-display" />
                </div>
                <div className="home-content__description">
                    <LogoHome />
                    <p>{homeDescription}</p>
                    <div className="home-content__button">
                        <Button
                            type="button"
                            style="dark"
                            stretch={false}
                            clickHandler={contactUsHandler}
                        >
                            {darkButtonHomeLabel}
                        </Button>
                        <Button
                            type="button"
                            style="light"
                            stretch={false}
                            clickHandler={donateHandler}
                        >
                            {lightButtonHomeLabel}
                        </Button>
                    </div>
                </div>
            </div>
        </SiteLayout>
    );
};
