import React, { useCallback, Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import type { ConnectedThunk } from "../../redux/thunks";

import type { State } from "../../redux/reducers";
import type { User } from "../../redux/reducers/widgets/user";
import type { UserInfo } from "../../../entities/user";
import type {
    ProfileFormData,
    ChangeAvatarFormData,
    ChangePasswordFormData,
} from "../../../app/resolvers/user";
import { getUserInfo } from "../../redux/selectors/widgets/user";
import {
    fetchUserInfoThunk,
    fetchLogoutThunk,
    fetchChangeProfileThunk,
    fetchChangeAvatarThunk,
    fetchChangePasswordThunk,
} from "../../redux/thunks/user";

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

type ChangeAvatarData = {
    avatar: FileList;
};

type ProfileProps = {
    userInfo: User;
    fetchUserInfoThunk: ConnectedThunk<typeof fetchUserInfoThunk>;
    fetchLogoutThunk: ConnectedThunk<typeof fetchLogoutThunk>;
    fetchChangeProfileThunk: ConnectedThunk<typeof fetchChangeProfileThunk>;
    fetchChangeAvatarThunk: ConnectedThunk<typeof fetchChangeAvatarThunk>;
    fetchChangePasswordThunk: ConnectedThunk<typeof fetchChangePasswordThunk>;
};

const fields = {
    login: /^[a-zA-Z\d_]{2,12}$/,
    email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^[\d]{11}$/,
};

type ProfileFiled = {
    fieldKey: string;
    name: string;
    value?: string;
};

type ProfileFileds = ProfileFiled[];

const prepareProfileFields = ({
    first_name,
    second_name,
    login,
    email,
    phone,
    display_name,
}: Partial<UserInfo>): ProfileFileds => {
    return [
        { fieldKey: "Имя", name: "first_name", value: first_name },
        { fieldKey: "Фамилия", name: "second_name", value: second_name },
        { fieldKey: "Логин", name: "login", value: login },
        { fieldKey: "Почта", name: "email", value: email },
        { fieldKey: "Телефон", name: "phone", value: phone },
        { fieldKey: "Имя в чате", name: "display_name", value: display_name },
    ];
};

const Profile = ({
    userInfo,
    fetchUserInfoThunk,
    fetchLogoutThunk,
    fetchChangeProfileThunk,
    fetchChangeAvatarThunk,
    fetchChangePasswordThunk,
}: ProfileProps) => {
    const [changeAvatarOpen, setChangeAvatarOpen] = useState(false);
    const [changePassOpen, setChangePassOpen] = useState(false);
    const [profileFields, setProfileFields] = useState<ProfileFileds>([]);

    useEffect(() => {
        fetchUserInfoThunk();
    }, []);

    useEffect(() => {
        if (userInfo.isAuth) {
            const preparedProfileFields = prepareProfileFields({
                first_name: userInfo.first_name,
                second_name: userInfo.second_name,
                login: userInfo.login,
                email: userInfo.email,
                phone: userInfo.phone,
                display_name: userInfo.display_name,
            });

            setProfileFields(preparedProfileFields);
        }
    }, [userInfo]);

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

        const formData = new FormData();
        formData.append("avatar", file!);

        /* Здесь отправляем форму нового аватара */
        fetchChangeAvatarThunk(formData);
    }, []);

    const onChangePassSubmit = useCallback((data: ChangePasswordFormData) => {
        if (data.newPassword === data.oldPassword) {
            return { [FORM_ERROR]: newPasswordMatchError };
        }

        /* Здесь отправляем форму нового пароля */
        fetchChangePasswordThunk(data);
    }, []);

    const onFormSubmit = useCallback((data: ProfileFormData) => {
        if (!data.email || !fields.email.test(data.email)) {
            return { [FORM_ERROR]: emailError };
        }

        if (!data.login || !fields.login.test(data.login)) {
            return { [FORM_ERROR]: loginError };
        }

        if (!data.phone || !fields.phone.test(data.phone)) {
            return { [FORM_ERROR]: phoneError };
        }

        const first_name = data.first_name || "";
        const second_name = data.second_name || "";
        const display_name = data.display_name || "";
        const login = data.login || "";
        const email = data.email || "";
        const phone = data.phone || "";

        const sendData = {
            first_name,
            second_name,
            display_name,
            login,
            email,
            phone,
        };

        /* Здесь отправляем форму профиля */
        fetchChangeProfileThunk(sendData);
    }, []);

    const logoutHandler = () => fetchLogoutThunk();

    return (
        <Fragment>
            <LeftSideButton className="leftside-button_fixed" />
            <GameLayout>
                <div className="profile">
                    <Avatar
                        src={userInfo.avatar}
                        size="large"
                        className="profile__avatar"
                    />
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
                                {profileFields.map((field: ProfileFiled) => {
                                    return (
                                        <ProfileField
                                            key={field.name}
                                            fieldKey={field.fieldKey}
                                            name={field.name}
                                            value={field.value}
                                        />
                                    );
                                })}
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
                    <Button
                        type="submit"
                        style="primary"
                        className="button_logout"
                        clickHandler={logoutHandler}
                    >
                        Выход
                    </Button>
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
                                name="oldPassword"
                                placeholder="Старый пароль"
                            />
                            <InputField
                                className="profile__text-input"
                                type="password"
                                name="newPassword"
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

const mapStateToProps = (state: State) => ({
    userInfo: getUserInfo(state),
});

// export default connect(mapStateToProps, {
//     fetchUserInfoThunk,
//     fetchLogoutThunk,
//     fetchChangeProfileThunk,
//     fetchChangeAvatarThunk,
//     fetchChangePasswordThunk,
// })(Profile);

// function loadData(store) {
//     return store.dispatch(fetchUserInfo);
// }
// export default connect(mapStateToProps, { fetchUserInfo })(Profile);
export default {
    component: connect(mapStateToProps, {
        fetchUserInfoThunk,
        fetchLogoutThunk,
        fetchChangeProfileThunk,
        fetchChangeAvatarThunk,
        fetchChangePasswordThunk,
    })(Profile),
    loadData: ({ dispatch }) => dispatch(fetchUserInfoThunk()),
};
