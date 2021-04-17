import type { UserInfo } from "../../../../../entities/user";
import type {
    FetchAction,
    FulfilledAction,
    FailedAction,
} from "../../../actions/user/userInfo";

import {
    FETCH_USER_INFO,
    FETCH_USER_INFO_FULFILLED,
    FETCH_USER_INFO_FAILED,
} from "../../../actions/user/userInfo";

export type User = UserInfo & {
    loading: boolean;
    isAuth: boolean | null;
};

const initialState = {
    loading: false,
    isAuth: false,
    id: 0,
    firstName: "",
    secondName: "",
    displayName: "",
    login: "",
    avatar: "",
    email: "",
    phone: "",
};

type Actions = FulfilledAction | FetchAction | FailedAction;

export const user = (state: User = initialState, action: Actions) => {
    switch (action.type) {
        case FETCH_USER_INFO: {
            state.loading = true;

            return state;
        }
        case FETCH_USER_INFO_FULFILLED: {
            state.loading = false;

            const {
                id,
                firstName,
                secondName,
                displayName,
                login,
                avatar,
                email,
                phone,
            } = action.payload;

            state.id = id;
            state.firstName = firstName;
            state.secondName = secondName;
            state.displayName = displayName;
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
    }

    return state;
};
