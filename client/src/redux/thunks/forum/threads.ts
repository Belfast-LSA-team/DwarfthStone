import type { Dispatch } from "redux";
import {
    resolveThreads,
    resolveCreateThread,
} from "../../../../app/resolvers/forum/threads";
import { CreateThreadData } from "../../../pages/forum";
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

export const createThread = (data: CreateThreadData) => (
    dispatch: Dispatch
) => {
    dispatch(create());

    return resolveCreateThread(data)
        .then((res) => dispatch(createFulfilled()))
        .catch((err) => dispatch(createFailed(err)));
};
