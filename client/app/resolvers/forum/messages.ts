import { getLocal, postLocal } from "../..";

type ThreadMessagesServerResult = {
    thread: any;
    messages: any;
};

export const resolveMessages = (id: string) =>
    getLocal<ThreadMessagesServerResult>(`db/threads/${id}`).then((thread) => {
        return "";
    });

export const resolveCreateMessage = (data: any) => {
    return postLocal("db/threads/message", data).then(() => {});
};
