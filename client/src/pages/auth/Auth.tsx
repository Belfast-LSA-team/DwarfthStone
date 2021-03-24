import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classnames from "classnames";
import BoxWrapper from "../../components/boxwrapper";
import GameLayout from "../../components/gamelayout";
import InputField from "../../components/inputField";
import Button from "../../components/button";

import "./auth.css";

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

    const onInputChange = (e: React.ChangeEvent) => {
        const input = e.target as HTMLInputElement;
        setFormValue({ ...formValues, [input.name]: input.value });
    };

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formValues);
    };

    const onRegisterClick = () => {
        history.push("/register");
    };

    let formView;

    if (props.form === "login") {
        /* Login Form */
        formView = (
            <React.Fragment>
                <h1 className="auth__title">Вход</h1>
                <form onSubmit={onFormSubmit}>
                    <InputField
                        className="auth__input"
                        type="text"
                        name="login"
                        stretch={true}
                        value={formValues.login}
                        placeholder="Логин"
                        onChange={onInputChange}
                    />
                    <InputField
                        className="auth__input"
                        type="password"
                        name="password"
                        stretch={true}
                        value={formValues.password}
                        placeholder="Пароль"
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
                <h1 className="auth__title">Вход</h1>
                <form onSubmit={onFormSubmit}>
                    <InputField
                        className="auth__input"
                        type="email"
                        name="email"
                        stretch={true}
                        value={formValues.email!}
                        placeholder="Почта"
                        onChange={onInputChange}
                    />
                    <InputField
                        className="auth__input"
                        type="text"
                        name="phone"
                        stretch={true}
                        value={formValues.phone!}
                        placeholder="Телефон"
                        onChange={onInputChange}
                    />
                    <InputField
                        className="auth__input"
                        type="text"
                        name="login"
                        stretch={true}
                        value={formValues.login}
                        placeholder="Логин"
                        onChange={onInputChange}
                    />
                    <InputField
                        className="auth__input"
                        type="password"
                        name="password"
                        stretch={true}
                        value={formValues.password}
                        placeholder="Пароль"
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
                    clickHandler={onRegisterClick}
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
