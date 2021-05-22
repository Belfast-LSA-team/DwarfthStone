import type { Thread } from "../../../../../entities/thread";
import type {
    FetchAction,
    FulfilledAction,
    FailedAction,
} from "../../../actions/forum/threads";

import {
    FETCH_THREADS,
    FETCH_THREADS_FULFILLED,
    FETCH_THREADS_FAILED,
} from "../../../actions/forum/threads";

export type Threads = {
    threads: Thread[];
    loading: boolean;
};

const initialState = {
    loading: false,
    threads: [],
};

type Actions = FulfilledAction | FetchAction | FailedAction;

export const threads = (state: Threads = initialState, action: Actions) => {
    switch (action.type) {
        case FETCH_THREADS: {
            state.loading = true;

            return state;
        }
        case FETCH_THREADS_FULFILLED: {
            state.loading = false;

            state.threads = action.payload;

            return state;
        }
        case FETCH_THREADS_FAILED: {
            state.loading = false;

            return state;
        }
        default: {
            return state;
        }
    }
};
