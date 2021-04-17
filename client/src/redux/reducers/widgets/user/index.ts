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
    isAuth: null,
    id: 0,
    first_name: "",
    second_name: "",
    display_name: "",
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

            return state;
        }
        case FETCH_USER_INFO_FAILED: {
            state.loading = false;

            return state;
        }
    }

    return state;
};
