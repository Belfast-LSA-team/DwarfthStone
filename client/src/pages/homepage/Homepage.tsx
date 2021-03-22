import React from "react";
import { useHistory } from "react-router-dom";
import "./homepage.css";

import homeImg from "../../assets/images/GameMedia.png";
import { SiteLayout } from "../../layouts/SiteLayout/SiteLayout";
import { LogoHome } from "../../components/logos/Logo";
import Button from "../../components/button";
import { homeDescription } from "../../data/content";

const Homepage = () => {
    const history = useHistory();

    const contactUsHandler = () => {
        history.push("/contact");
    };
    const donateHandler = () => {
        history.push("/donate");
    };
    return (
        <SiteLayout bgColor={"important"}>
            <div className="home_content">
                <div className="home_content_image">
                    <img src={homeImg} alt="home-cards-display" />
                </div>
                <div className="home_content_description">
                    <LogoHome />
                    <p>{homeDescription}</p>
                    <div className="home_content_button">
                        <Button
                            type="button"
                            style="dark"
                            stretch={false}
                            clickHandler={contactUsHandler}
                        >
                            Связаться с нами
                        </Button>
                        <Button
                            type="button"
                            style="light"
                            stretch={false}
                            clickHandler={donateHandler}
                        >
                            На кофе
                        </Button>
                    </div>
                </div>
            </div>
        </SiteLayout>
    );
};

export default Homepage;
