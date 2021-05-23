import { getLocal, postLocal, paths } from "../..";

type ThreadMessagesServerResult = {
    thread: any;
    messages: any;
};

export const resolveMessages = (id: string) =>
    getLocal<ThreadMessagesServerResult>(`${paths.threads}/${id}`).then(
        (thread) => {
            return thread;
        }
    );

export const resolveCreateMessage = (data: any) => {
    return postLocal(paths.threadsMessages, data).then(() => {});
};
