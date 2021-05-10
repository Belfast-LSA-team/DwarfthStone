import type { Dispatch } from "redux";
import {
    resolveSignin,
    resolveSignup,
    resolveLogout,
    resolveUserInfo,
    resolveChangeProfile,
    resolveChangeAvatar,
    resolveChangePassword,
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
} from "../../actions/user";

import type {
    LoginFormData,
    ProfileFormData,
    ChangeAvatarFormData,
    ChangePasswordFormData,
} from "../../../../app/resolvers/user";

export const fetchSigninThunk = (signinData: LoginFormData) => (
    dispatch: Dispatch
) => {
    dispatch(fetchSignin());

    return resolveSignin(signinData)
        .then((res) => dispatch(fetchFulfilledSignin(res)))
        .catch((err) => dispatch(fetchFailedSignin(err)));
};

export const fetchSignupThunk = (signupData: ProfileFormData) => (
    dispatch: Dispatch
) => {
    dispatch(fetchSignup());

    return resolveSignup(signupData)
        .then((res) => dispatch(fetchFulfilledSignup(res)))
        .catch((err) => dispatch(fetchFailedSignup(err)));
};

export const fetchLogoutThunk = () => (dispatch: Dispatch) => {
    dispatch(fetchLogout());

    return resolveLogout()
        .then((res) => dispatch(fetchFulfilledLogout(res)))
        .catch((err) => dispatch(fetchFailedLogout(err)));
};

export const fetchUserInfoThunk = () => (dispatch: Dispatch) => {
    dispatch(fetchUserInfo());

    return resolveUserInfo()
        .then((res) => dispatch(fetchFulfilledUserInfo(res)))
        .catch((err) => dispatch(fetchFailedUserInfo(err)));
};

export const fetchChangeProfileThunk = (changeProfileData: ProfileFormData) => (
    dispatch: Dispatch
) => {
    dispatch(fetchChangeProfile());

    return resolveChangeProfile(changeProfileData)
        .then((res) => dispatch(fetchFulfilledChangeProfile(res)))
        .catch((err) => dispatch(fetchFailedChangeProfile(err)));
};

export const fetchChangeAvatarThunk = (
    changeAvatarData: ChangeAvatarFormData
) => (dispatch: Dispatch) => {
    dispatch(fetchChangeAvatar());

    return resolveChangeAvatar(changeAvatarData)
        .then((res) => dispatch(fetchFulfilledChangeAvatar(res)))
        .catch((err) => dispatch(fetchFailedChangeAvatar(err)));
};

export const fetchChangePasswordThunk = (
    changePasswordData: ChangePasswordFormData
) => (dispatch: Dispatch) => {
    dispatch(fetchChangePassword());

    console.log("change pass");

    return resolveChangePassword(changePasswordData)
        .then((res) => {
            dispatch(fetchFulfilledChangePassword(res));
            console.log(res);
        })
        .catch((err) => {
            dispatch(fetchFailedChangePassword(err));
            console.log(err);
        });
};
