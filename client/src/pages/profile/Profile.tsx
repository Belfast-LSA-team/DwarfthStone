import React, { useCallback, Fragment, useState } from "react";
import { Form } from "react-final-form";
import Avatar from "../../components/avatar";
import GameLayout from "../../layouts/gamelayout";
import Button from "../../components/button";
import ProfileField from "./components/profilefield";
import Modal from "../../components/modal";
import Title from "../../components/title";
import InputField from "../../components/inputField";
import LeftSideButton from "../../components/leftsideButton";
import { Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import {
    loginError,
    emailError,
    phoneError,
    newPasswordMatchError,
    noAvatarError,
    invalidImageResError,
} from "../../data/content";

import "./profile.css";

type ProfileData = {
    email: string;
    phone: string;
    login: string;
};

type ChangePassData = {
    old_pass: string;
    new_pass: string;
};

interface ChangeAvatarData {
    avatar: FileList;
}

const fields = {
    login: /^[a-zA-Z\d_]{2,12}$/,
    email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^[8\d]{11}$/,
};

const getProfileFields = () => {
    return [
        { fieldKey: "Почта", name: "email", value: "user123@gmail.com" },
        { fieldKey: "Телефон", name: "phone", value: "89991234567" },
        { fieldKey: "Логин", name: "login", value: "H3ll0W0R1D" },
    ];
};

export const Profile = () => {
    const [changeAvatarOpen, setChangeAvatarOpen] = useState(false);
    const [changePassOpen, setChangePassOpen] = useState(false);

    const onChangeAvatarClick = useCallback(() => {
        setChangeAvatarOpen(true);
    }, []);

    const onChangeAvatarClose = useCallback(() => {
        setChangeAvatarOpen(false);
    }, []);

    const onChangePassClick = useCallback(() => {
        setChangePassOpen(true);
    }, []);

    const onChangePassClose = useCallback(() => {
        setChangePassOpen(false);
    }, []);

    const onChangeAvatarSubmit = useCallback((data: ChangeAvatarData) => {
        if (!data.avatar) {
            return { [FORM_ERROR]: noAvatarError };
        }

        const file = data.avatar[0];

        if (!file.name.match(/^.*\.(?:png|jpg|jpeg)$/gi)) {
            return { [FORM_ERROR]: invalidImageResError };
        }

        /* Здесь отправляем форму нового аватара */
    }, []);

    const onChangePassSubmit = useCallback((data: ChangePassData) => {
        if (data.new_pass === data.old_pass) {
            return { [FORM_ERROR]: newPasswordMatchError };
        }

        /* Здесь отправляем форму нового пароля */
    }, []);

    const onFormSubmit = useCallback((data: ProfileData) => {
        if (!data.email || !fields.email.test(data.email)) {
            return { [FORM_ERROR]: emailError };
        }

        if (!data.login || !fields.login.test(data.login)) {
            return { [FORM_ERROR]: loginError };
        }

        if (!data.phone || !fields.phone.test(data.phone)) {
            return { [FORM_ERROR]: phoneError };
        }

        console.log(data);

        /* Здесь отправляем форму профиля */
    }, []);

    const profileFields = getProfileFields();

    return (
        <Fragment>
            <LeftSideButton className="leftside-button_fixed" />
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
            <Modal
                className="profile__modal"
                isOpen={changeAvatarOpen}
                closeModalHandler={onChangeAvatarClose}
            >
                <Title text="Изменить аватар" level={3} />
                <Form
                    onSubmit={onChangeAvatarSubmit}
                    render={({ submitError, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field<FileList> name="avatar">
                                {({ input: { value, onChange, ...input } }) => (
                                    <input
                                        {...input}
                                        type="file"
                                        onChange={({ target }) =>
                                            onChange(target.files)
                                        }
                                    />
                                )}
                            </Field>
                            {submitError ? (
                                <div className="profile__error">
                                    {submitError}
                                </div>
                            ) : null}

                            <div className="profile__modal-submit-container">
                                <Button
                                    type="submit"
                                    style="primary"
                                    clickHandler={() => {}}
                                >
                                    Отправить
                                </Button>
                            </div>
                        </form>
                    )}
                />
            </Modal>
            <Modal
                className="profile__modal"
                isOpen={changePassOpen}
                closeModalHandler={onChangePassClose}
            >
                <Title text="Изменить пароль" level={3} />
                <Form
                    onSubmit={onChangePassSubmit}
                    render={({ submitError, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <InputField
                                className="profile__text-input"
                                type="password"
                                name="old_pass"
                                placeholder="Старый пароль"
                            />
                            <InputField
                                className="profile__text-input"
                                type="password"
                                name="new_pass"
                                placeholder="Новый пароль"
                            />
                            {submitError ? (
                                <div className="profile__error">
                                    {submitError}
                                </div>
                            ) : null}
                            <div className="profile__modal-submit-container">
                                <Button
                                    type="submit"
                                    style="primary"
                                    clickHandler={() => {}}
                                >
                                    Отправить
                                </Button>
                            </div>
                        </form>
                    )}
                />
            </Modal>
        </Fragment>
    );
};
