import React from "react";
import { useHistory } from "react-router-dom";

import Modal from "../../components/modal";
import Button from "../../components/button";
import Title from "../../components/title";
import { UserGame } from "../User/user";
import "./endGame.css";
import { backToProfile, startNew } from "../../data/content";

type EndGameProps = {
    status: boolean;
    userData: UserGame | undefined;
};

export const EndGame = ({ status, userData }: EndGameProps): JSX.Element => {
    const history = useHistory();

    const startNewHandler = () => {
        history.push(`/game/${Math.floor(Math.random() * 10000)}`);
    };
    const backToProfileHandler = () => {
        history.push("/profile");
    };
    return (
        <Modal isOpen={status} className="endGame" closeModalHandler={() => {}}>
            <div className="endGame-modal">
                <Title
                    text={`Победил! ${userData && userData.name}`}
                    level={1}
                    dark={true}
                />
                <div className="endGame__button-container">
                    <Button
                        type="button"
                        style="primary"
                        stretch={false}
                        clickHandler={startNewHandler}
                    >
                        {startNew}
                    </Button>
                    <Button
                        type="button"
                        style="dark"
                        stretch={false}
                        clickHandler={backToProfileHandler}
                    >
                        {backToProfile}
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
