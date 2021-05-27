import type { Messages } from "../../../../../entities/thread";
import type {
    FetchAction,
    FulfilledAction,
    FailedAction,
} from "../../../actions/forum/messages";

import {
    FETCH_MESSAGES,
    FETCH_MESSAGES_FULFILLED,
    FETCH_MESSAGES_FAILED,
} from "../../../actions/forum/messages";

const initialState = {
    loading: false,
    messages: {
        messages: [],
        thread: [],
    },
};

export type MessagesState = {
    messages: Messages;
    loading: boolean;
};

type Actions = FulfilledAction | FetchAction | FailedAction;

export const messages = (
    state: MessagesState = initialState,
    action: Actions
) => {
    switch (action.type) {
        case FETCH_MESSAGES: {
            state.loading = true;

            return state;
        }
        case FETCH_MESSAGES_FULFILLED: {
            state.loading = false;
            state.messages.thread = action.payload.thread;
            state.messages.messages = action.payload.messages;

            return state;
        }
        case FETCH_MESSAGES_FAILED: {
            state.loading = false;

            return state;
        }
        default: {
            return state;
        }
    }
};
