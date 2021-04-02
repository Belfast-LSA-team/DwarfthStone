import React, { useCallback, Fragment } from "react";
import { Form } from "react-final-form";
import Avatar from "../../components/avatar";
import GameLayout from "../../layouts/gamelayout";
import Button from "../../components/button";
import ProfileField from "./components/profilefield";
import { FORM_ERROR } from "final-form";

import "./profile.css";

type ProfileData = {
    email: string;
    phone: string;
    login: string;
};

type FormErrors = Record<string, string>;

const fields = {
    login: /^[a-zA-Z\d_]{2,12}$/,
    email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^[8\d]{11}$/,
};

const onFormSubmit = (data: ProfileData) => {
    const errors: FormErrors = {};

    if (!data.email || !fields.email.test(data.email)) {
        errors[FORM_ERROR] = "Введите валидный email";
    }

    if (!data.login || !fields.login.test(data.login)) {
        errors[FORM_ERROR] =
            "Логин может содержать латинские буквы и цифры и быть от 2 до 12 символов";
    }

    if (!data.phone || !fields.phone.test(data.phone)) {
        errors[FORM_ERROR] =
            'Номер телефона должен быть записан в формате "8XXXXXXXXXX"';
    }

    if (errors[FORM_ERROR]) {
        return errors;
    }

    console.log(data);

    /* Здесь отправляем форму */
};

const getProfileFields = () => {
    return [
        { fieldKey: "Почта", name: "email", value: "user123@gmail.com" },
        { fieldKey: "Телефон", name: "phone", value: "89991234567" },
        { fieldKey: "Логин", name: "login", value: "H3ll0W0R1D" },
    ];
};

export const Profile = () => {
    const onChangeAvatarClick = useCallback(() => {}, []);
    const onChangePassClick = useCallback(() => {}, []);

    const profileFields = getProfileFields();

    return (
        <Fragment>
            <GameLayout>
                <div className="profile">
                    <Avatar src="" size="large" className="profile__avatar" />
                    <div className="profile__btns-top">
                        <Button
                            type="button"
                            style="secondary"
                            clickHandler={onChangeAvatarClick}
                        >
                            Изменить аватар
                        </Button>
                        <Button
                            type="button"
                            style="secondary"
                            clickHandler={onChangePassClick}
                        >
                            Изменить пароль
                        </Button>
                    </div>
                    <Form
                        onSubmit={onFormSubmit}
                        render={({ submitError, handleSubmit, pristine }) => (
                            <form
                                className="profile__form"
                                onSubmit={handleSubmit}
                            >
                                <div className="profile__fields-container">
                                    {profileFields.map((field) => {
                                        return (
                                            <ProfileField
                                                key={field.name}
                                                fieldKey={field.fieldKey}
                                                name={field.name}
                                                value={field.value}
                                            />
                                        );
                                    })}
                                </div>
                                <div className="profile__error">
                                    {submitError}
                                </div>
                                <div className="profile__btns-bottom">
                                    {pristine ? null : (
                                        <Button
                                            className="auth__btn"
                                            type="submit"
                                            style="primary"
                                            clickHandler={() => {}}
                                        >
                                            Сохранить изменения
                                        </Button>
                                    )}
                                </div>
                            </form>
                        )}
                    />
                </div>
            </GameLayout>
        </Fragment>
    );
};
