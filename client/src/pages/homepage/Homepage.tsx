import React from "react";
import "./homepage.css";
import homeImg from "../../assets/images/GameMedia.png";
import { SiteLayout } from "../../layouts/SiteLayout/SiteLayout";
import { LogoHome } from "../../components/logos/Logo";
import { homeDescription } from "../../data/content";
const Homepage = () => {
    return (
        <SiteLayout bgColor={"important"}>
            <div className="home-content">
                <div className="home-content__image-section">
                    <img src={homeImg} alt="home-cards-display" />
                </div>
                <div className="home-content__description-section">
                    <LogoHome />
                    <p>{homeDescription}</p>
                </div>
            </div>
        </SiteLayout>
    );
};

export default Homepage;
