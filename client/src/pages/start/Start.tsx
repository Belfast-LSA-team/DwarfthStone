import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import BoxWrapper from "../../components/boxwrapper";
import GameLayout from "../../layouts/gamelayout";
import Button from "../../components/button";
import LeftsideButton from "../../components/leftsideButton";

import "../../css/page.css";

export const Start = () => {
    const history = useHistory();

    return (
        <div className="info-page">
            <LeftsideButton onClick={() => history.push("/")} />

            <main className="info-page__main">
                <BoxWrapper className="page">
                    <h1 className="page__title">DwarfthStone</h1>
                    <Button
                        className="page__btn"
                        type="submit"
                        stretch={true}
                        style="primary"
                        clickHandler={() => history.push("/game")}
                    >
                        Начать игру
                    </Button>
                    <Button
                        className="page__btn"
                        type="button"
                        stretch={true}
                        style="secondary"
                        clickHandler={() => history.push("/score-dashboard")}
                    >
                        Лучшие результаты
                    </Button>
                    <Button
                        className="page__btn"
                        type="button"
                        stretch={true}
                        style="secondary"
                        clickHandler={() => history.push("/profile")}
                    >
                        Настройки пользователя
                    </Button>
                </BoxWrapper>
            </main>
        </div>
    );
};
