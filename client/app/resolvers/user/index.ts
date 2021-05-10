import { get, post, put } from "../..";

export type LoginFormData = {
    login: string;
    password: string;
};

export type ProfileFormData = {
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
};

export type ChangeAvatarFormData = {
    avatar: FileList;
};

export type ChangePasswordFormData = {
    oldPassword: string;
    newPassword: string;
};

type UserServerResult = {
    id: number;
    first_name: string | null;
    last_name: string | null;
    display_name: string | null;
    login: string;
    avatar: string | null;
    email: string;
    phone: string | null;
};

export const resolveSignin = (signinData: LoginFormData) =>
    post("auth/signin", signinData).then((res) => res);

export const resolveSignup = (signupData: ProfileFormData) =>
    post("auth/signup", signupData).then((res) => res);

export const resolveLogout = () => post("auth/logout").then((res) => res);

export const resolveUserInfo = () =>
    get<UserServerResult>("auth/user").then((res) => res);

export const resolveChangeProfile = (changeProfileData: ProfileFormData) =>
    put("user/profile", changeProfileData).then((res) => res);

export const resolveChangeAvatar = (newAvatar: ChangeAvatarFormData) =>
    put("user/profile/avatar", newAvatar, {
        headers: null,
        withCredentials: true,
    }).then((res) => res);

export const resolveChangePassword = (
    changePasswordData: ChangePasswordFormData
) => put("user/password", changePasswordData).then((res) => res);
