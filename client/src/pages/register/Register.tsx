import React, { useCallback, Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-final-form";
import BoxWrapper from "../../components/boxwrapper";
import GameLayout from "../../layouts/gamelayout";
import InputList from "../../components/inputList";
import Button from "../../components/button";
import { FormErrors, RegisterFormData } from "../../types/auth";
import {
    loginError,
    passwordError,
    emailError,
    phoneError,
} from "../../data/content";

import "../../css/page.css";

const formValues = [
    {
        placeholder: "Почта",
        name: "email",
        type: "email",
    },
    {
        placeholder: "Телефон",
        name: "phone",
        type: "text",
    },
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

const validate = (data: RegisterFormData) => {
    const errors: FormErrors = {};

    const fields = {
        login: /^[a-zA-Z\d_]{2,12}$/,
        password: /^[a-zA-Z\d]{6,}$/,
        email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        phone: /^[8\d]{11}$/,
    };

    if (!data.login || !fields.login.test(data.login)) {
        errors.login = loginError;
    }

    if (!data.password || !fields.password.test(data.password)) {
        errors.password = passwordError;
    }

    if (!data.email || !fields.email.test(data.email)) {
        errors.email = emailError;
    }

    if (!data.phone || !fields.phone.test(data.phone)) {
        errors.phone = phoneError;
    }

    return errors;
};

const onFormSubmit = (data: RegisterFormData) => {
    console.log(data);

    /* Здесь отправляем форму */
};

export const Register = () => {
    const history = useHistory();

    const onLoginClick = useCallback(() => {
        history.push("/login");
    }, []);

    return (
        <Fragment>
            <GameLayout>
                <BoxWrapper className="page">
                    <h1 className="page__title">Регистрация</h1>
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
                                    Зарегистрироваться
                                </Button>
                            </form>
                        )}
                    ></Form>
                    <Button
                        className="page__btn"
                        type="button"
                        stretch={true}
                        style="secondary"
                        clickHandler={onLoginClick}
                    >
                        Войти
                    </Button>
                </BoxWrapper>
            </GameLayout>
        </Fragment>
    );
};
