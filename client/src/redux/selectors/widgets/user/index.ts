import type { State } from "../../../reducers";

export const getUser = (state: State) => state.widgets.user;

export const getIsAuth = (state: State) => getUser(state).isAuth;

export const getUserIsLoading = (state: State) => getUser(state).loading;
