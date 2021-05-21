import type { Thread } from "../../../../entities/thread";
import type { ErrorType } from "../../../../app";
import type { Action } from "..";

export const FETCH_THREADS = "threads/FETCH";
export const FETCH_THREADS_FULFILLED = "threads/FETCH_FULFILLED";
export const FETCH_THREADS_FAILED = "threads/FETCH_FAILED";

export const CREATE_THREAD = "threads/CREATE";
export const CREATE_THREAD_FULFILLED = "threads/CREATE_FULFILLED";
export const CREATE_THREAD_FAILED = "threads/CREATE_FAILED";

export type FetchAction = Action<typeof FETCH_THREADS>;
export type FulfilledAction = Action<typeof FETCH_THREADS_FULFILLED, Thread[]>;
export type FailedAction = Action<typeof FETCH_THREADS_FAILED, ErrorType>;

export type createAction = Action<typeof CREATE_THREAD>;
export type createFulfilledAction = Action<
    typeof CREATE_THREAD_FULFILLED,
    Thread[]
>;
export type createFailedAction = Action<typeof CREATE_THREAD_FAILED, ErrorType>;

export const fetch = () =>
    ({
        type: FETCH_THREADS,
    } as FetchAction);

export const fetchFulfilled = (payload: Thread[]) =>
    ({
        type: FETCH_THREADS_FULFILLED,
        payload,
    } as FulfilledAction);

export const fetchFailed = (payload: ErrorType) =>
    ({
        type: FETCH_THREADS_FAILED,
        payload,
    } as FailedAction);

export const create = () =>
    ({
        type: CREATE_THREAD,
    } as createAction);

export const createFulfilled = () =>
    ({
        type: CREATE_THREAD_FULFILLED,
    } as createFulfilledAction);

export const createFailed = (payload: ErrorType) =>
    ({
        type: CREATE_THREAD_FAILED,
        payload,
    } as createFailedAction);
