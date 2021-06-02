import type { ThunkCreator } from "../";
import type {
    SigninActions,
    SignupActions,
    LogoutActions,
    UserInfoActions,
    ChangeProfileActions,
    ChangeAvatarActions,
    ChangePasswordActions,
    ServiceIdActions,
    OAuthSigninActions,
} from "../../actions/user";

import type {
    LoginFormData,
    ProfileFormData,
    ChangeAvatarFormData,
    ChangePasswordFormData,
    OAuthSigninDataType,
} from "../../../../app/resolvers/user";
import {
    resolveSignin,
    resolveSignup,
    resolveLogout,
    resolveUserInfo,
    resolveChangeProfile,
    resolveChangeAvatar,
    resolveChangePassword,
    resolveServiceId,
    resolveOAuthSignin,
} from "../../../../app/resolvers/user";
import {
    fetchSignin,
    fetchFulfilledSignin,
    fetchFailedSignin,
    fetchSignup,
    fetchFulfilledSignup,
    fetchFailedSignup,
    fetchLogout,
    fetchFulfilledLogout,
    fetchFailedLogout,
    fetchUserInfo,
    fetchFulfilledUserInfo,
    fetchFailedUserInfo,
    fetchChangeProfile,
    fetchFulfilledChangeProfile,
    fetchFailedChangeProfile,
    fetchChangeAvatar,
    fetchFulfilledChangeAvatar,
    fetchFailedChangeAvatar,
    fetchChangePassword,
    fetchFulfilledChangePassword,
    fetchFailedChangePassword,
    fetchServiceId,
    fetchFulfilledServiceId,
    fetchFailedServiceId,
    fetchOAuthSignin,
    fetchFulfilledOAuthSignin,
    fetchFailedOAuthSignin,
} from "../../actions/user";

type FetchSignIn = ThunkCreator<SigninActions, LoginFormData>;
export const fetchSigninThunk: FetchSignIn = (signinData) => (dispatch) => {
    dispatch(fetchSignin());

    return resolveSignin(signinData)
        .then((res) => dispatch(fetchFulfilledSignin(res)))
        .catch((err) => dispatch(fetchFailedSignin(err)));
};

type FetchSignup = ThunkCreator<SignupActions, ProfileFormData>;
export const fetchSignupThunk: FetchSignup = (signupData) => (dispatch) => {
    dispatch(fetchSignup());

    return resolveSignup(signupData)
        .then((res) => dispatch(fetchFulfilledSignup(res)))
        .catch((err) => dispatch(fetchFailedSignup(err)));
};

type FetchLogout = ThunkCreator<LogoutActions>;
export const fetchLogoutThunk: FetchLogout = () => (dispatch) => {
    dispatch(fetchLogout());

    return resolveLogout()
        .then((res) => dispatch(fetchFulfilledLogout(res)))
        .catch((err) => dispatch(fetchFailedLogout(err)));
};

type FetchUserInfo = ThunkCreator<UserInfoActions>;
export const fetchUserInfoThunk: FetchUserInfo = () => (dispatch) => {
    dispatch(fetchUserInfo());

    return resolveUserInfo()
        .then((res) => dispatch(fetchFulfilledUserInfo(res)))
        .catch((err) => dispatch(fetchFailedUserInfo(err)));
};

type FetchChangeProfile = ThunkCreator<ChangeProfileActions, ProfileFormData>;
export const fetchChangeProfileThunk: FetchChangeProfile = (
    changeProfileData
) => (dispatch) => {
    dispatch(fetchChangeProfile());

    return resolveChangeProfile(changeProfileData)
        .then((res) => dispatch(fetchFulfilledChangeProfile(res)))
        .catch((err) => dispatch(fetchFailedChangeProfile(err)));
};

type FetchChangeAvatar = ThunkCreator<
    ChangeAvatarActions,
    ChangeAvatarFormData
>;
export const fetchChangeAvatarThunk: FetchChangeAvatar = (changeAvatarData) => (
    dispatch
) => {
    dispatch(fetchChangeAvatar());

    return resolveChangeAvatar(changeAvatarData)
        .then((res) => dispatch(fetchFulfilledChangeAvatar(res)))
        .catch((err) => dispatch(fetchFailedChangeAvatar(err)));
};

type FetchChangePassword = ThunkCreator<
    ChangePasswordActions,
    ChangePasswordFormData
>;
export const fetchChangePasswordThunk: FetchChangePassword = (
    changePasswordData
) => (dispatch) => {
    dispatch(fetchChangePassword());

    return resolveChangePassword(changePasswordData)
        .then((res) => dispatch(fetchFulfilledChangePassword(res)))
        .catch((err) => dispatch(fetchFailedChangePassword(err)));
};

type FetchServiceId = ThunkCreator<ServiceIdActions, string>;
export const fetchServiceIdThunk: FetchServiceId = (redirectURI) => (
    dispatch
) => {
    dispatch(fetchServiceId());

    return resolveServiceId(redirectURI)
        .then((res: string) => dispatch(fetchFulfilledServiceId(res)))
        .catch((err) => dispatch(fetchFailedServiceId(err)));
};

type FetchOAuthSignin = ThunkCreator<OAuthSigninActions, OAuthSigninDataType>;
export const fetchOAuthSigninThunk: FetchOAuthSignin = (
    OAuthSigninData: OAuthSigninDataType
) => (dispatch) => {
    dispatch(fetchOAuthSignin());

    return resolveOAuthSignin(OAuthSigninData)
        .then(() => dispatch(fetchFulfilledOAuthSignin()))
        .catch((err) => dispatch(fetchFailedOAuthSignin(err)));
};
