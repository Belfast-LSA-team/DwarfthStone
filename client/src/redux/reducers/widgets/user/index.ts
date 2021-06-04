import type { UserInfo } from "../../../../../entities/user";
import type {
    FetchSignin,
    FulfilledSignin,
    FailedSignin,
    FetchSignup,
    FulfilledSignup,
    FailedSignup,
    FetchLogout,
    FulfilledLogout,
    FailedLogout,
    FetchUserInfo,
    FulfilledUserInfo,
    FailedUserInfo,
    FetchChangeProfile,
    FulfilledChangeProfile,
    FailedChangeProfile,
    FetchChangeAvatar,
    FulfilledChangeAvatar,
    FailedChangeAvatar,
    FetchChangePassword,
    FulfilledChangePassword,
    FailedChangePassword,
    FetchServiceId,
    FulfilledServiceId,
    FailedServiceId,
    FetchOAuthSignin,
    FulfilledOAuthSignin,
    FailedOAuthSignin,
} from "../../../actions/user";

import {
    FETCH_SIGNIN,
    FETCH_SIGNIN_FULFILLED,
    FETCH_SIGNIN_FAILED,
    FETCH_SIGNUP,
    FETCH_SIGNUP_FULFILLED,
    FETCH_SIGNUP_FAILED,
    FETCH_LOGOUT,
    FETCH_LOGOUT_FULFILLED,
    FETCH_LOGOUT_FAILED,
    FETCH_USER_INFO,
    FETCH_USER_INFO_FULFILLED,
    FETCH_USER_INFO_FAILED,
    FETCH_CHANGE_PROFILE,
    FETCH_CHANGE_PROFILE_FULFILLED,
    FETCH_CHANGE_PROFILE_FAILED,
    FETCH_CHANGE_AVATAR,
    FETCH_CHANGE_AVATAR_FULFILLED,
    FETCH_CHANGE_AVATAR_FAILED,
    FETCH_CHANGE_PASSWORD,
    FETCH_CHANGE_PASSWORD_FULFILLED,
    FETCH_CHANGE_PASSWORD_FAILED,
    FETCH_SERVICE_ID,
    FETCH_SERVICE_ID_FULFILLED,
    FETCH_SERVICE_ID_FAILED,
    FETCH_OAUTH_SIGNIN,
    FETCH_OAUTH_SIGNIN_FULFILLED,
    FETCH_OAUTH_SIGNIN_FAILED,
} from "../../../actions/user";

export type User = UserInfo & {
    loading: boolean;
    isAuth: boolean | null;
    isOAuth: boolean | null;
    serviceId: string | null;
};

const initialState = {
    loading: false,
    isAuth: null,
    isOAuth: null,
    serviceId: null,
    id: 0,
    first_name: "",
    second_name: "",
    display_name: "",
    login: "",
    avatar: null,
    email: "",
    phone: "",
};

type Actions =
    | FetchSignin
    | FulfilledSignin
    | FailedSignin
    | FetchSignup
    | FulfilledSignup
    | FailedSignup
    | FetchLogout
    | FulfilledLogout
    | FailedLogout
    | FetchUserInfo
    | FulfilledUserInfo
    | FailedUserInfo
    | FetchChangeProfile
    | FulfilledChangeProfile
    | FailedChangeProfile
    | FetchChangeAvatar
    | FulfilledChangeAvatar
    | FailedChangeAvatar
    | FetchChangePassword
    | FulfilledChangePassword
    | FailedChangePassword
    | FetchServiceId
    | FulfilledServiceId
    | FailedServiceId
    | FetchOAuthSignin
    | FulfilledOAuthSignin
    | FailedOAuthSignin;

export const user = (state: User = initialState, action: Actions) => {
    switch (action.type) {
        case FETCH_SIGNIN: {
            state.loading = true;
            return state;
        }
        case FETCH_SIGNIN_FULFILLED: {
            state.loading = false;
            state.isAuth = true;
            return state;
        }
        case FETCH_SIGNIN_FAILED: {
            state.loading = false;
            return state;
        }
        case FETCH_SIGNUP: {
            state.loading = true;
            return state;
        }
        case FETCH_SIGNUP_FULFILLED: {
            state.loading = false;
            state.isAuth = true;
            return state;
        }
        case FETCH_SIGNUP_FAILED: {
            state.loading = false;
            return state;
        }
        case FETCH_LOGOUT: {
            state.loading = true;
            return state;
        }
        case FETCH_LOGOUT_FULFILLED: {
            state.loading = false;
            state.isAuth = false;
            state.id = 0;
            state.first_name = "";
            state.second_name = "";
            state.display_name = "";
            state.login = "";
            state.avatar = "";
            state.email = "";
            state.phone = "";
            return state;
        }
        case FETCH_LOGOUT_FAILED: {
            state.loading = false;
            return state;
        }
        case FETCH_USER_INFO: {
            state.loading = true;
            return state;
        }
        case FETCH_USER_INFO_FULFILLED: {
            state.loading = false;
            const {
                id,
                first_name,
                second_name,
                display_name,
                login,
                avatar,
                email,
                phone,
            } = action.payload;

            state.id = id;
            state.first_name = first_name;
            state.second_name = second_name;
            state.display_name = display_name;
            state.login = login;
            state.avatar = avatar;
            state.email = email;
            state.phone = phone;
            state.isAuth = true;

            return state;
        }
        case FETCH_USER_INFO_FAILED: {
            state.loading = false;
            return state;
        }
        case FETCH_CHANGE_PROFILE: {
            state.loading = true;
            return state;
        }
        case FETCH_CHANGE_PROFILE_FULFILLED: {
            state.loading = false;
            const {
                first_name,
                second_name,
                display_name,
                login,
                email,
                phone,
            } = action.payload;

            state.first_name = first_name;
            state.second_name = second_name;
            state.display_name = display_name;
            state.login = login;
            state.email = email;
            state.phone = phone;
            return state;
        }
        case FETCH_CHANGE_PROFILE_FAILED: {
            state.loading = false;
            return state;
        }
        case FETCH_CHANGE_AVATAR: {
            state.loading = true;
            return state;
        }
        case FETCH_CHANGE_AVATAR_FULFILLED: {
            state.loading = false;

            const { avatar } = action.payload;
            state.avatar = avatar;

            return state;
        }
        case FETCH_CHANGE_AVATAR_FAILED: {
            state.loading = false;
            return state;
        }
        case FETCH_CHANGE_PASSWORD: {
            state.loading = true;
            return state;
        }
        case FETCH_CHANGE_PASSWORD_FULFILLED: {
            state.loading = false;
            return state;
        }
        case FETCH_CHANGE_PASSWORD_FAILED: {
            state.loading = false;
            return state;
        }
        case FETCH_SERVICE_ID: {
            state.loading = true;
            return state;
        }
        case FETCH_SERVICE_ID_FULFILLED: {
            state.loading = false;
            state.serviceId = action.payload.service_id;
            return state;
        }
        case FETCH_SERVICE_ID_FAILED: {
            state.loading = false;
            return state;
        }
        case FETCH_OAUTH_SIGNIN: {
            state.loading = true;
            return state;
        }
        case FETCH_OAUTH_SIGNIN_FULFILLED: {
            state.loading = false;
            state.isOAuth = true;
            return state;
        }
        case FETCH_OAUTH_SIGNIN_FAILED: {
            state.loading = false;
            return state;
        }
    }

    return state;
};
