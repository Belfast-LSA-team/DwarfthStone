import React, { useCallback, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-final-form";
import BoxWrapper from "../../components/boxwrapper";
import GameLayout from "../../components/gamelayout";
import InputList from "../../components/inputList";
import Button from "../../components/button";
import { FormErrors, LoginFormData } from "../../types/auth";

import "../../css/auth.css";

const formValues = [
    {
        placeholder: "Логин",
        name: "login",
        type: "text",
    },
    {
        placeholder: "Пароль",
        name: "password",
        type: "password",
    },
];

const onFormSubmit = (data: LoginFormData) => {
    console.log(data);

    /* Здесь отправляем форму */
};

const validate = (data: LoginFormData) => {
    const errors: FormErrors = {};

    if (!data.login) {
        errors.login = "Введите логин";
    }

    if (!data.password) {
        errors.password = "Введите пароль";
    }

    return errors;
};

export const Login = () => {
    const history = useHistory();

    const onRegisterClick = useCallback(() => {
        history.push("/register");
    }, []);

    return (
        <Fragment>
            <GameLayout>
                <BoxWrapper className="auth">
                    <h1 className="auth__title">Вход</h1>
                    <Form
                        validate={validate}
                        onSubmit={onFormSubmit}
                        render={({ handleSubmit }) => (
                            <form
                                className="auth__form"
                                onSubmit={handleSubmit}
                            >
                                {InputList(formValues, "auth__input", false)}
                                <Button
                                    className="auth__btn"
                                    type="submit"
                                    stretch={true}
                                    style="primary"
                                    clickHandler={() => {}}
                                >
                                    Войти
                                </Button>
                            </form>
                        )}
                    ></Form>
                    <Button
                        className="auth__btn"
                        type="button"
                        stretch={true}
                        style="secondary"
                        clickHandler={onRegisterClick}
                    >
                        Зарегистрироваться
                    </Button>
                </BoxWrapper>
            </GameLayout>
        </Fragment>
    );
};
