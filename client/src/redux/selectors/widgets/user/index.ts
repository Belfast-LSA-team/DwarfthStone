import type { State } from "../../../reducers";

export const getUserInfo = (state: State) => state.widgets.user;

export const getIsAuth = (state: State) => getUserInfo(state).isAuth;

export const getOIsAuth = (state: State) => getUserInfo(state).isOAuth;

export const getUserIsLoading = (state: State) => getUserInfo(state).loading;

export const getServiceId = (state: State) => getUserInfo(state).serviceId;
