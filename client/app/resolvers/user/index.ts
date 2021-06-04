import { get, getLocal, post, put, paths } from "../..";
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

export type OAuthSigninDataType = {
    code: string;
    redirect_uri: string;
};

export const resolveSignin = (signinData: LoginFormData) =>
    post<string>(paths.signin, signinData);

export const resolveSignup = (signupData: ProfileFormData) =>
    post<string>(paths.signup, signupData);

export const resolveLogout = () => post<string>(paths.logout);

export const resolveUserInfo = () => getLocal<UserInfo>(paths.userInfo);

export const resolveChangeProfile = (changeProfileData: ProfileFormData) =>
    put<UserInfo>(paths.changeProfile, changeProfileData);

export const resolveChangeAvatar = (newAvatar: ChangeAvatarFormData) =>
    put<UserInfo>(paths.changeAvatar, newAvatar, {
        headers: null,
        withCredentials: true,
    });

export const resolveChangePassword = (
    changePasswordData: ChangePasswordFormData
) => put<string>(paths.changePassword, changePasswordData);

export const resolveServiceId = (redirectURI: string) =>
    get<string>(paths.oauthServiceId, {
        params: { redirect_uri: redirectURI },
    });

export const resolveOAuthSignin = (OAuthSigninData: OAuthSigninDataType) =>
    post<string>(paths.oAuthSignin, OAuthSigninData);
