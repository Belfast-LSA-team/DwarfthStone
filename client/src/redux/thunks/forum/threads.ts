import type { Dispatch } from "redux";
import { resolveThreads } from "../../../../app/resolvers/forum/threads";
import {
    fetch,
    fetchFailed,
    fetchFulfilled,
} from "../../actions/forum/threads";

export const fetchThreads = () => (dispatch: Dispatch) => {
    dispatch(fetch());

    return resolveThreads()
        .then((res) => dispatch(fetchFulfilled(res)))
        .catch((err) => dispatch(fetchFailed(err)));
};
