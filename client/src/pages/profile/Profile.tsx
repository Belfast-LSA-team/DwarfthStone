import React, { useCallback, Fragment, useState, useEffect } from "react";

import type { State } from "../../redux/reducers";
import type { User } from "../../redux/reducers/widgets/user";
import type { UserInfo } from "../../../entities/user";
import { connect } from "react-redux";
import { getUserInfo } from "../../redux/selectors/widgets/user";
import { fetchUserInfo } from "../../redux/thunks/user/userInfo";

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

type ChangeAvatarData = {
    avatar: FileList;
};

type ProfileProps = {
    userInfo: User;
    fetchUserInfo: () => void;
};

const fields = {
    login: /^[a-zA-Z\d_]{2,12}$/,
    email: /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^[8\d]{11}$/,
};

type ProfileFiled = {
    fieldKey: string;
    name: string;
    value?: string;
};

type ProfileFileds = ProfileFiled[];

const prepareProfileFields = ({
    firstName,
    secondName,
    login,
    email,
    phone,
    displayName,
}: Partial<UserInfo>): ProfileFileds => {
    return [
        { fieldKey: "Имя", name: "firstName", value: firstName },
        { fieldKey: "Фамилия", name: "secondName", value: secondName },
        { fieldKey: "Логин", name: "login", value: login },
        { fieldKey: "Почта", name: "email", value: email },
        { fieldKey: "Телефон", name: "phone", value: phone },
        { fieldKey: "Имя в чате", name: "displayName", value: displayName },
    ];
};

export const Profile = ({ userInfo, fetchUserInfo }: ProfileProps) => {
    const [changeAvatarOpen, setChangeAvatarOpen] = useState(false);
    const [changePassOpen, setChangePassOpen] = useState(false);
    const [profileFields, setProfileFields] = useState<ProfileFileds>([]);

    useEffect(() => {
        fetchUserInfo();
    }, []);

    useEffect(() => {
        if (userInfo.isAuth) {
            const preparedProfileFields = prepareProfileFields({
                firstName: userInfo.firstName,
                secondName: userInfo.secondName,
                login: userInfo.login,
                email: userInfo.email,
                phone: userInfo.phone,
                displayName: userInfo.displayName,
            });

            setProfileFields(preparedProfileFields);
        }
    }, [userInfo]);

    console.log(userInfo);

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

        /* Здесь отправляем форму профиля */
    }, []);

    return (
        <Fragment>
            <LeftSideButton className="leftside-button_fixed" />
            <GameLayout>
                <div className="profile">
                    <Avatar src="#" size="large" className="profile__avatar" />
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
                                    {profileFields.map(
                                        (field: ProfileFiled) => {
                                            return (
                                                <ProfileField
                                                    key={field.name}
                                                    fieldKey={field.fieldKey}
                                                    name={field.name}
                                                    value={field.value}
                                                />
                                            );
                                        }
                                    )}
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

const mapStateToProps = (state: State) => ({
    userInfo: getUserInfo(state),
});

// function loadData(store) {
//     return store.dispatch(fetchUserInfo);
// }
// export default connect(mapStateToProps, { fetchUserInfo })(Profile);
export default {
    component: connect(mapStateToProps, { fetchUserInfo })(Profile),
    loadData: ({ dispatch }) => dispatch(fetchUserInfo()),
};
