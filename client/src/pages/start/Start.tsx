import React, { Fragment } from "react";
import BoxWrapper from "../../components/boxwrapper";
import GameLayout from "../../components/gamelayout";
import Button from "../../components/button";

import "../../css/auth.css";

export const Start = () => {
    return (
        <Fragment>
            <GameLayout>
                <BoxWrapper className="auth">
                    <h1 className="auth__title">DwarfthStone</h1>
                    <Button
                        className="auth__btn"
                        type="submit"
                        stretch={true}
                        style="primary"
                        clickHandler={() => {}}
                    >
                        Собрать колоду
                    </Button>
                    <Button
                        className="auth__btn"
                        type="submit"
                        stretch={true}
                        style="primary"
                        clickHandler={() => {}}
                    >
                        Начать игру
                    </Button>
                    <Button
                        className="auth__btn"
                        type="button"
                        stretch={true}
                        style="secondary"
                        clickHandler={() => {}}
                    >
                        Лучшие результаты
                    </Button>
                    <Button
                        className="auth__btn"
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
