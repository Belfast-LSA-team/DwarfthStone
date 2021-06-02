import type { UserInfo } from "../../../../entities/user";
import type { ErrorType } from "../../../../app";
import type { Action } from "..";

export const FETCH_SIGNIN = "signin/FETCH";
export const FETCH_SIGNIN_FULFILLED = "signin/FETCH_FULFILLED";
export const FETCH_SIGNIN_FAILED = "signin/FETCH_FAILED";

export type FetchSignin = Action<typeof FETCH_SIGNIN>;
export type FulfilledSignin = Action<typeof FETCH_SIGNIN_FULFILLED, string>;
export type FailedSignin = Action<typeof FETCH_SIGNIN_FAILED, ErrorType>;

export type SigninActions = FetchSignin | FulfilledSignin | FailedSignin;

export const fetchSignin = () =>
    ({
        type: FETCH_SIGNIN,
    } as FetchSignin);

export const fetchFulfilledSignin = (payload: string) =>
    ({
        type: FETCH_SIGNIN_FULFILLED,
        payload,
    } as FulfilledSignin);

export const fetchFailedSignin = (payload: ErrorType) =>
    ({
        type: FETCH_SIGNIN_FAILED,
        payload,
    } as FailedSignin);

export const FETCH_SIGNUP = "signup/FETCH";
export const FETCH_SIGNUP_FULFILLED = "signup/FETCH_FULFILLED";
export const FETCH_SIGNUP_FAILED = "signup/FETCH_FAILED";

export type FetchSignup = Action<typeof FETCH_SIGNUP>;
export type FulfilledSignup = Action<typeof FETCH_SIGNUP_FULFILLED, string>;
export type FailedSignup = Action<typeof FETCH_SIGNUP_FAILED, ErrorType>;

export type SignupActions = FetchSignup | FulfilledSignup | FailedSignup;

export const fetchSignup = () =>
    ({
        type: FETCH_SIGNUP,
    } as FetchSignup);

export const fetchFulfilledSignup = (payload: string) =>
    ({
        type: FETCH_SIGNUP_FULFILLED,
        payload,
    } as FulfilledSignup);

export const fetchFailedSignup = (payload: ErrorType) =>
    ({
        type: FETCH_SIGNUP_FAILED,
        payload,
    } as FailedSignup);

export const FETCH_LOGOUT = "logout/FETCH";
export const FETCH_LOGOUT_FULFILLED = "logout/FETCH_FULFILLED";
export const FETCH_LOGOUT_FAILED = "logout/FETCH_FAILED";

export type FetchLogout = Action<typeof FETCH_LOGOUT>;
export type FulfilledLogout = Action<typeof FETCH_LOGOUT_FULFILLED, string>;
export type FailedLogout = Action<typeof FETCH_LOGOUT_FAILED, ErrorType>;

export type LogoutActions = FetchLogout | FulfilledLogout | FailedLogout;

export const fetchLogout = () =>
    ({
        type: FETCH_LOGOUT,
    } as FetchLogout);

export const fetchFulfilledLogout = (payload: string) =>
    ({
        type: FETCH_LOGOUT_FULFILLED,
        payload,
    } as FulfilledLogout);

export const fetchFailedLogout = (payload: ErrorType) =>
    ({
        type: FETCH_LOGOUT_FAILED,
        payload,
    } as FailedLogout);

export const FETCH_USER_INFO = "userInfo/FETCH";
export const FETCH_USER_INFO_FULFILLED = "userInfo/FETCH_FULFILLED";
export const FETCH_USER_INFO_FAILED = "userInfo/FETCH_FAILED";

export type FetchUserInfo = Action<typeof FETCH_USER_INFO>;
export type FulfilledUserInfo = Action<
    typeof FETCH_USER_INFO_FULFILLED,
    UserInfo
>;
export type FailedUserInfo = Action<typeof FETCH_USER_INFO_FAILED, ErrorType>;

export type UserInfoActions =
    | FetchUserInfo
    | FulfilledUserInfo
    | FailedUserInfo;

export const fetchUserInfo = () =>
    ({
        type: FETCH_USER_INFO,
    } as FetchUserInfo);

export const fetchFulfilledUserInfo = (payload: UserInfo) =>
    ({
        type: FETCH_USER_INFO_FULFILLED,
        payload,
    } as FulfilledUserInfo);

export const fetchFailedUserInfo = (payload: ErrorType) =>
    ({
        type: FETCH_USER_INFO_FAILED,
        payload,
    } as FailedUserInfo);

export const FETCH_CHANGE_PROFILE = "changeProfile/FETCH";
export const FETCH_CHANGE_PROFILE_FULFILLED = "changeProfile/FETCH_FULFILLED";
export const FETCH_CHANGE_PROFILE_FAILED = "changeProfile/FETCH_FAILED";

export type FetchChangeProfile = Action<typeof FETCH_CHANGE_PROFILE>;
export type FulfilledChangeProfile = Action<
    typeof FETCH_CHANGE_PROFILE_FULFILLED,
    UserInfo
>;
export type FailedChangeProfile = Action<
    typeof FETCH_CHANGE_PROFILE_FAILED,
    ErrorType
>;

export type ChangeProfileActions =
    | FetchChangeProfile
    | FulfilledChangeProfile
    | FailedChangeProfile;

export const fetchChangeProfile = () =>
    ({
        type: FETCH_CHANGE_PROFILE,
    } as FetchChangeProfile);

export const fetchFulfilledChangeProfile = (payload: UserInfo) =>
    ({
        type: FETCH_CHANGE_PROFILE_FULFILLED,
        payload,
    } as FulfilledChangeProfile);

export const fetchFailedChangeProfile = (payload: ErrorType) =>
    ({
        type: FETCH_CHANGE_PROFILE_FAILED,
        payload,
    } as FailedChangeProfile);

export const FETCH_CHANGE_AVATAR = "changeAvatar/FETCH";
export const FETCH_CHANGE_AVATAR_FULFILLED = "changeAvatar/FETCH_FULFILLED";
export const FETCH_CHANGE_AVATAR_FAILED = "changeAvatar/FETCH_FAILED";

export type FetchChangeAvatar = Action<typeof FETCH_CHANGE_AVATAR>;
export type FulfilledChangeAvatar = Action<
    typeof FETCH_CHANGE_AVATAR_FULFILLED,
    UserInfo
>;
export type FailedChangeAvatar = Action<
    typeof FETCH_CHANGE_AVATAR_FAILED,
    ErrorType
>;

export type ChangeAvatarActions =
    | FetchChangeAvatar
    | FulfilledChangeAvatar
    | FailedChangeAvatar;

export const fetchChangeAvatar = () =>
    ({
        type: FETCH_CHANGE_AVATAR,
    } as FetchChangeAvatar);

export const fetchFulfilledChangeAvatar = (payload: UserInfo) =>
    ({
        type: FETCH_CHANGE_AVATAR_FULFILLED,
        payload,
    } as FulfilledChangeAvatar);

export const fetchFailedChangeAvatar = (payload: ErrorType) =>
    ({
        type: FETCH_CHANGE_AVATAR_FAILED,
        payload,
    } as FailedChangeAvatar);

export const FETCH_CHANGE_PASSWORD = "changePassword/FETCH";
export const FETCH_CHANGE_PASSWORD_FULFILLED = "changePassword/FETCH_FULFILLED";
export const FETCH_CHANGE_PASSWORD_FAILED = "changePassword/FETCH_FAILED";

export type FetchChangePassword = Action<typeof FETCH_CHANGE_PASSWORD>;
export type FulfilledChangePassword = Action<
    typeof FETCH_CHANGE_PASSWORD_FULFILLED,
    string
>;
export type FailedChangePassword = Action<
    typeof FETCH_CHANGE_PASSWORD_FAILED,
    ErrorType
>;

export type ChangePasswordActions =
    | FetchChangePassword
    | FulfilledChangePassword
    | FailedChangePassword;

export const fetchChangePassword = () =>
    ({
        type: FETCH_CHANGE_PASSWORD,
    } as FetchChangePassword);

export const fetchFulfilledChangePassword = (payload: string) =>
    ({
        type: FETCH_CHANGE_PASSWORD_FULFILLED,
        payload,
    } as FulfilledChangePassword);

export const fetchFailedChangePassword = (payload: ErrorType) =>
    ({
        type: FETCH_CHANGE_PASSWORD_FAILED,
        payload,
    } as FailedChangePassword);

export const FETCH_SERVICE_ID = "serviceId/FETCH";
export const FETCH_SERVICE_ID_FULFILLED = "serviceId/FETCH_FULFILLED";
export const FETCH_SERVICE_ID_FAILED = "serviceId/FETCH_FAILED";

export type FetchServiceId = Action<typeof FETCH_SERVICE_ID>;
export type FulfilledServiceId = Action<
    typeof FETCH_SERVICE_ID_FULFILLED,
    string
>;
export type FailedServiceId = Action<typeof FETCH_SERVICE_ID_FAILED, ErrorType>;

export type ServiceIdActions =
    | FetchServiceId
    | FulfilledServiceId
    | FailedServiceId;

export const fetchServiceId = () =>
    ({
        type: FETCH_SERVICE_ID,
    } as FetchServiceId);

export const fetchFulfilledServiceId = (payload: string) =>
    ({
        type: FETCH_SERVICE_ID_FULFILLED,
        payload,
    } as FulfilledServiceId);

export const fetchFailedServiceId = (payload: ErrorType) =>
    ({
        type: FETCH_SERVICE_ID_FAILED,
        payload,
    } as FailedServiceId);

export const FETCH_OAUTH_SIGNIN = "oauthSignin/FETCH";
export const FETCH_OAUTH_SIGNIN_FULFILLED = "oauthSignin/FETCH_FULFILLED";
export const FETCH_OAUTH_SIGNIN_FAILED = "oauthSignin/FETCH_FAILED";

export type FetchOAuthSignin = Action<typeof FETCH_OAUTH_SIGNIN>;
export type FulfilledOAuthSignin = Action<typeof FETCH_OAUTH_SIGNIN_FULFILLED>;
export type FailedOAuthSignin = Action<
    typeof FETCH_OAUTH_SIGNIN_FAILED,
    ErrorType
>;

export type OAuthSigninActions =
    | FetchOAuthSignin
    | FulfilledOAuthSignin
    | FailedOAuthSignin;

export const fetchOAuthSignin = () =>
    ({
        type: FETCH_OAUTH_SIGNIN,
    } as FetchOAuthSignin);

export const fetchFulfilledOAuthSignin = () =>
    ({
        type: FETCH_OAUTH_SIGNIN_FULFILLED,
    } as FulfilledOAuthSignin);

export const fetchFailedOAuthSignin = (payload: ErrorType) =>
    ({
        type: FETCH_OAUTH_SIGNIN_FAILED,
        payload,
    } as FailedOAuthSignin);
