import type { Dispatch } from "redux";
import {
    resolveMessages,
    resolveCreateMessage,
} from "../../../../app/resolvers/forum/messages";
import { replyFormData } from "../../../pages/threadPage";
import {
    fetch,
    fetchFailed,
    fetchFulfilled,
    create,
    createFulfilled,
    createFailed,
} from "../../actions/forum/messages";

export const fetchMessages = (id: string) => (dispatch: Dispatch) => {
    dispatch(fetch());

    return resolveMessages(id)
        .then((res) => dispatch(fetchFulfilled(res)))
        .catch((err) => dispatch(fetchFailed(err)));
};

export const createMessage = (data: replyFormData) => (dispatch: Dispatch) => {
    dispatch(create());

    return resolveCreateMessage(data)
        .then((res) => dispatch(createFulfilled()))
        .catch((err) => dispatch(createFailed(err)));
};
