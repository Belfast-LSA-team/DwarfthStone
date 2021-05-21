import type { Dispatch } from "redux";
import {
    resolveThreads,
    resolveCreateThread,
} from "../../../../app/resolvers/forum/threads";
import {
    fetch,
    fetchFailed,
    fetchFulfilled,
    create,
    createFulfilled,
    createFailed,
} from "../../actions/forum/threads";

export const fetchThreads = () => (dispatch: Dispatch) => {
    dispatch(fetch());

    return resolveThreads()
        .then((res) => dispatch(fetchFulfilled(res)))
        .catch((err) => dispatch(fetchFailed(err)));
};

export const createThread = (data) => (dispatch: Dispatch) => {
    dispatch(create());

    return resolveCreateThread(data)
        .then((res) => dispatch(createFulfilled()))
        .catch((err) => dispatch(createFailed(err)));
};
