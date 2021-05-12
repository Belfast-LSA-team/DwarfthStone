import { get, post, put } from "../..";
import type { UserInfo } from "../../../entities/user";

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
    post<string>("auth/signin", signinData);

export const resolveSignup = (signupData: ProfileFormData) =>
    post<string>("auth/signup", signupData);

export const resolveLogout = () => post<string>("auth/logout");

export const resolveUserInfo = () => get<UserInfo>("auth/user");

export const resolveChangeProfile = (changeProfileData: ProfileFormData) =>
    put<UserInfo>("user/profile", changeProfileData);

export const resolveChangeAvatar = (newAvatar: ChangeAvatarFormData) =>
    put<UserInfo>("user/profile/avatar", newAvatar, {
        headers: null,
        withCredentials: true,
    });

export const resolveChangePassword = (
    changePasswordData: ChangePasswordFormData
) => put<string>("user/password", changePasswordData);
