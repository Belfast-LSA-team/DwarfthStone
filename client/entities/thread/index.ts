export type Thread = {
    id: number;
    title: string;
    repliesCount: number;
    created: Date;
    lastUpdated: Date;
} | null;

export type Message = {
    author_id: number;
    author_name: string;
    content: string;
    created: Date;
};

export type Messages = {
    thread: Thread;
    messages: Message[];
};
