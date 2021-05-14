import React, { Fragment } from "react";
import BoxWrapper from "../../components/boxwrapper";
import GameLayout from "../../layouts/gamelayout";
import Button from "../../components/button";

import "../../css/page.css";

export const Start = () => {
    return (
        <Fragment>
            <GameLayout>
                <BoxWrapper className="page">
                    <h1 className="page__title">DwarfthStone</h1>
                    <Button
                        className="page__btn"
                        type="submit"
                        stretch={true}
                        style="primary"
                        clickHandler={() => {}}
                    >
                        Собрать колоду
                    </Button>
                    <Button
                        className="page__btn"
                        type="submit"
                        stretch={true}
                        style="primary"
                        clickHandler={() => {}}
                    >
                        Начать игру
                    </Button>
                    <Button
                        className="page__btn"
                        type="button"
                        stretch={true}
                        style="secondary"
                        clickHandler={() => {}}
                    >
                        Лучшие результаты
                    </Button>
                    <Button
                        className="page__btn"
                        type="button"
                        stretch={true}
                        style="secondary"
                        clickHandler={() => {}}
                    >
                        Настройки пользователя
                    </Button>
                </BoxWrapper>
            </GameLayout>
        </Fragment>
    );
};
