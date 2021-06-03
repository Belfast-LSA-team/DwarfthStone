import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./homepage.css";

import type { State } from "../../redux/reducers";
import type { ConnectedThunk } from "../../redux/thunks";
import { getOIsAuth, getIsAuth } from "../../redux/selectors/widgets/user";
import {
    fetchOAuthSigninThunk,
    fetchUserInfoThunk,
} from "../../redux/thunks/user";
import { REDIRECT_URI } from "../../constants";
import homeImg from "../../assets/images/GameMedia.png";
import { SiteLayout } from "../../layouts/SiteLayout/SiteLayout";
import { LogoHome } from "../../components/logos/Logo";
import Button from "../../components/button";
import {
    homeDescription,
    darkButtonHomeLabel,
    lightButtonHomeLabel,
} from "../../data/content";

type HomepageProps = {
    isAuth: boolean | null;
    isOAuth: boolean | null;
    fetchOAuthSigninThunk: ConnectedThunk<typeof fetchOAuthSigninThunk>;
    fetchUserInfoThunk: ConnectedThunk<typeof fetchUserInfoThunk>;
};

export const Homepage = ({
    isOAuth,
    fetchOAuthSigninThunk,
    fetchUserInfoThunk,
}: HomepageProps) => {
    const history = useHistory();
    const search = useLocation().search;
    const code = new URLSearchParams(search).get("code");

    if (code && !isOAuth) {
        fetchOAuthSigninThunk({ code, redirect_uri: REDIRECT_URI });
    }

    useEffect(() => {
        if (isOAuth) {
            fetchUserInfoThunk();
        }
    }, [isOAuth]);

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

const mapStateToProps = (state: State) => ({
    isAuth: getIsAuth(state),
    isOAuth: getOIsAuth(state),
});

export default connect(mapStateToProps, {
    fetchOAuthSigninThunk,
    fetchUserInfoThunk,
})(Homepage);
