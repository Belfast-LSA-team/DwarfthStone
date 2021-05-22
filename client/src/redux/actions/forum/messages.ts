import type { Thread } from "../../../../entities/thread";
import type { ErrorType } from "../../../../app";
import type { Action } from "..";

export const FETCH_MESSAGES = "messages/FETCH";
export const FETCH_MESSAGES_FULFILLED = "messages/FETCH_FULFILLED";
export const FETCH_MESSAGES_FAILED = "messages/FETCH_FAILED";

export const CREATE_MESSAGE = "messages/CREATE";
export const CREATE_MESSAGE_FULFILLED = "messages/CREATE_FULFILLED";
export const CREATE_MESSAGE_FAILED = "messages/CREATE_FAILED";

export type FetchAction = Action<typeof FETCH_MESSAGES>;
export type FulfilledAction = Action<typeof FETCH_MESSAGES_FULFILLED, any>;
export type FailedAction = Action<typeof FETCH_MESSAGES_FAILED, ErrorType>;

export type createAction = Action<typeof CREATE_MESSAGE>;
export type createFulfilledAction = Action<
    typeof CREATE_MESSAGE_FULFILLED,
    any
>;
export type createFailedAction = Action<
    typeof CREATE_MESSAGE_FAILED,
    ErrorType
>;

export const fetch = () =>
    ({
        type: FETCH_MESSAGES,
    } as FetchAction);

export const fetchFulfilled = (payload: any) =>
    ({
        type: FETCH_MESSAGES_FULFILLED,
        payload,
    } as FulfilledAction);

export const fetchFailed = (payload: ErrorType) =>
    ({
        type: FETCH_MESSAGES_FAILED,
        payload,
    } as FailedAction);

export const create = () =>
    ({
        type: CREATE_MESSAGE,
    } as createAction);

export const createFulfilled = () =>
    ({
        type: CREATE_MESSAGE_FULFILLED,
    } as createFulfilledAction);

export const createFailed = (payload: ErrorType) =>
    ({
        type: CREATE_MESSAGE_FAILED,
        payload,
    } as createFailedAction);
