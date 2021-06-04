import { getLocal, postLocal, paths } from "../..";
import { Thread, Message } from "../../../entities/thread";
import { replyFormData } from "../../../src/pages/threadPage";

export type ThreadMessagesServerResult = {
    thread: Thread;
    messages: Message;
};

export const resolveMessages = (id: string) =>
    getLocal<ThreadMessagesServerResult>(`db/thread/${id}`);

export const resolveCreateMessage = (data: replyFormData) => {
    return postLocal(paths.threadsMessages, data);
};
