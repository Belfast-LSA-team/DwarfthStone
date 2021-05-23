import React, { useCallback, Fragment } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form } from "react-final-form";

import type { ProfileFormData } from "../../../app/resolvers/user";
import type { FormErrors } from "../../types/auth";

import { fetchSignupThunk } from "../../redux/thunks/user";
import BoxWrapper from "../../components/boxwrapper";
import GameLayout from "../../layouts/gamelayout";
import InputList from "../../components/inputList";
import Button from "../../components/button";
import LeftsideButton from "../../components/leftsideButton";
import {
    firstNameError,
    secondNameError,
    loginError,
    passwordError,
    emailError,
    phoneError,
} from "../../data/content";

import "../../css/page.css";

const formValues = [
    {
        placeholder: "Имя",
        name: "first_name",
        type: "text",
    },
    {
        placeholder: "Фамилия",
        name: "second_name",
        type: "text",
    },
    {
        placeholder: "Логин",
        name: "login",
        type: "text",
    },
    {
        placeholder: "Почта",
        name: "email",
        type: "email",
    },
    {
        placeholder: "Пароль",
        name: "password",
        type: "password",
    },
    {
        placeholder: "Телефон",
        name: "phone",
        type: "tel",
    },
];

const validate = (data: ProfileFormData) => {
    const errors: FormErrors = {};

    const fields = {
        first_name: /^.{2,22}$/,
        second_name: /^.{2,22}$/,
        login: /^[a-zA-Z\d_]{2,12}$/,
        email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        password: /^[a-zA-Z\d]{6,}$/,
        phone: /^[8\d]{11}$/,
    };

    if (!data.first_name || !fields.first_name.test(data.first_name)) {
        errors.first_name = firstNameError;
    }

    if (!data.second_name || !fields.second_name.test(data.second_name)) {
        errors.second_name = secondNameError;
    }

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

type RegisterProps = {
    fetchSignupThunk: <R>(signinData: ProfileFormData) => Promise<R>;
};

export const Register = ({ fetchSignupThunk }: RegisterProps) => {
    const history = useHistory();

    const onLoginClick = useCallback(() => {
        history.push("/login");
    }, []);

    const onFormSubmit = (registerData: ProfileFormData) => {
        fetchSignupThunk(registerData).then(() => {
            console.log("register");

            history.push("/start");
        });
    };

    return (
        <div className="info-page">
            <LeftsideButton onClick={() => history.push("/")} />
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
        </div>
    );
};

export default connect(() => ({}), { fetchSignupThunk })(Register);
