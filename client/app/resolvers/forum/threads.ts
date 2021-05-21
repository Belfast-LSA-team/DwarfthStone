import { getLocal } from "../..";

type ThreadsServerResult = {
    id: number;
    title: string;
    replies_count: number;
    created: Date;
    last_updated: Date;
}[];

export const resolveThreads = () =>
    getLocal<ThreadsServerResult>("api/threads").then((threads) => {
        return threads.map((thread) => {
            return {
                lastUpdated: thread.last_updated,
                ...thread,
            };
        });
    });
