import type { UserInfo } from "../../../../entities/user";
import type { ErrorType } from "../../../../app";
import type { Action } from "..";

export const FETCH_USER_INFO = "userInfo/FETCH";
export const FETCH_USER_INFO_FULFILLED = "userInfo/FETCH_FULFILLED";
export const FETCH_USER_INFO_FAILED = "userInfo/FETCH_FAILED";

export type FetchAction = Action<typeof FETCH_USER_INFO>;
export type FulfilledAction = Action<
    typeof FETCH_USER_INFO_FULFILLED,
    UserInfo
>;
export type FailedAction = Action<typeof FETCH_USER_INFO_FAILED, ErrorType>;

export const fetch = () =>
    ({
        type: FETCH_USER_INFO,
    } as FetchAction);

export const fetchFulfilled = (payload: UserInfo) =>
    ({
        type: FETCH_USER_INFO_FULFILLED,
        payload,
    } as FulfilledAction);

export const fetchFailed = (payload: ErrorType) =>
    ({
        type: FETCH_USER_INFO_FAILED,
        payload,
    } as FailedAction);
