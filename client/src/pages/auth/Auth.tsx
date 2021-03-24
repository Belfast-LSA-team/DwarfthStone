import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import BoxWrapper from "../../components/boxwrapper";
import GameLayout from "../../components/gamelayout";
import InputField from "../../components/inputField";
import Button from "../../components/button";
import validator from "../../utils/validator";

import "./auth.css";

type ValueErrors = Record<string, string>;
type AuthProps = {
    form: "login" | "register";
};

export const Auth = (props: AuthProps) => {
    const history = useHistory();

    const initialFormValues =
        props.form === "login"
            ? {
                  login: "",
                  password: "",
              }
            : {
                  email: "",
                  phone: "",
                  login: "",
                  password: "",
              };

    const [formValues, setFormValue] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState({} as ValueErrors);

    const onInputChange = (e: React.ChangeEvent) => {
        const input = e.target as HTMLInputElement;
        setFormValue({ ...formValues, [input.name]: input.value });
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const validation = validator(form);

        if (!validation.valid) {
            setFormErrors(validation.errors);
        } else {
            setFormErrors({});
            console.log("Отправили форму");
        }
    };

    const onRegisterClick = () => {
        history.push("/register");
        setFormValue({
            email: "",
            phone: "",
            login: "",
            password: "",
        });
    };

    const onLoginClick = () => {
        history.push("/login");
        setFormValue({
            login: "",
            password: "",
        });
    };

    let formView;

    if (props.form === "login") {
        /* Login Form */
        formView = (
            <React.Fragment>
                <h1 className="auth__title">Вход</h1>
                <form className="auth__form" onSubmit={onFormSubmit}>
                    <InputField
                        className="auth__input"
                        type="text"
                        name="login"
                        stretch={true}
                        value={formValues.login}
                        placeholder="Логин"
                        error={formErrors.login_error}
                        onChange={onInputChange}
                    />
                    <InputField
                        className="auth__input"
                        type="password"
                        name="password"
                        stretch={true}
                        value={formValues.password}
                        placeholder="Пароль"
                        error={formErrors.password_error}
                        onChange={onInputChange}
                    />
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
                <Button
                    className="auth__btn"
                    type="button"
                    stretch={true}
                    style="secondary"
                    clickHandler={onRegisterClick}
                >
                    Зарегистрироваться
                </Button>
            </React.Fragment>
        );
    } else {
        /* Register Form */
        formView = (
            <React.Fragment>
                <h1 className="auth__title">Регистрация</h1>
                <form className="auth__form" onSubmit={onFormSubmit}>
                    <InputField
                        className="auth__input"
                        type="email"
                        name="email"
                        stretch={true}
                        value={formValues.email!}
                        placeholder="Почта"
                        error={formErrors.email_error}
                        onChange={onInputChange}
                    />
                    <InputField
                        className="auth__input"
                        type="text"
                        name="phone"
                        stretch={true}
                        value={formValues.phone!}
                        placeholder="Телефон"
                        error={formErrors.phone_error}
                        onChange={onInputChange}
                    />
                    <InputField
                        className="auth__input"
                        type="text"
                        name="login"
                        stretch={true}
                        value={formValues.login}
                        placeholder="Логин"
                        error={formErrors.login_error}
                        onChange={onInputChange}
                    />
                    <InputField
                        className="auth__input"
                        type="password"
                        name="password"
                        stretch={true}
                        value={formValues.password}
                        placeholder="Пароль"
                        error={formErrors.password_error}
                        onChange={onInputChange}
                    />
                    <Button
                        className="auth__btn"
                        type="submit"
                        stretch={true}
                        style="primary"
                        clickHandler={() => {}}
                    >
                        Зарегистрироваться
                    </Button>
                </form>
                <Button
                    className="auth__btn"
                    type="button"
                    stretch={true}
                    style="secondary"
                    clickHandler={onLoginClick}
                >
                    Войти
                </Button>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <GameLayout>
                <BoxWrapper className="auth" isModal={false}>
                    {formView}
                </BoxWrapper>
            </GameLayout>
        </React.Fragment>
    );
};
