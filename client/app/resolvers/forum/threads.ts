import { getLocal, postLocal } from "../..";

type ThreadsServerResult = {
    id: number;
    title: string;
    replies_count: number;
    created: Date;
    last_updated: Date;
}[];

export const resolveThreads = () =>
    getLocal<ThreadsServerResult>("db/threads").then((threads) => {
        return threads.map((thread) => {
            return {
                id: thread.id,
                lastUpdated: thread.last_updated,
                repliesCount: thread.replies_count,
                created: thread.created,
                title: thread.title,
            };
        });
    });

export const resolveCreateThread = (data: any) => {
    return postLocal("db/threads", data).then(() => {});
};
