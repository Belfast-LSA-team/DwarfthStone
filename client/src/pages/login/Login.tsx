import React, { useCallback, Fragment } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form } from "react-final-form";

import type { ConnectedThunk } from "../../redux/thunks";
import type { LoginFormData } from "../../../app/resolvers/user";
import type { FormErrors } from "../../types/auth";

import { fetchSigninThunk } from "../../redux/thunks/user";
import BoxWrapper from "../../components/boxwrapper";
import GameLayout from "../../layouts/gamelayout";
import InputList from "../../components/inputList";
import Button from "../../components/button";

import "../../css/page.css";

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

type LoginProps = {
    fetchSigninThunk: ConnectedThunk<typeof fetchSigninThunk>;
};

export const Login = ({ fetchSigninThunk }: LoginProps) => {
    const history = useHistory();

    const onRegisterClick = useCallback(() => {
        history.push("/register");
    }, []);

    const onFormSubmit = (signinData: LoginFormData) => {
        /* Здесь отправляем форму */
        fetchSigninThunk(signinData).then(() => {
            console.log("login");

            history.push("/start");
        });
    };

    return (
        <Fragment>
            <GameLayout>
                <BoxWrapper className="auth">
                    <h1 className="page__title">Вход</h1>
                    <Form
                        validate={validate}
                        onSubmit={onFormSubmit}
                        render={({ handleSubmit }) => (
                            <form
                                className="page__form"
                                onSubmit={handleSubmit}
                            >
                                {InputList(formValues, "page__input", true)}
                                <Button
                                    className="page__btn"
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
                        className="page__btn"
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

export default connect(null, { fetchSigninThunk })(Login);
