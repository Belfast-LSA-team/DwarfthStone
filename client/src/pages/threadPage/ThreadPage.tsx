import React, { useCallback, Fragment, useState } from "react";
import { Form, Field } from "react-final-form";
import Avatar from "../../components/avatar";
import Button from "../../components/button";
import LeftSideButton from "../../components/leftsideButton";
import Spinner from "../../components/spinner";
import Title from "../../components/title";
import "./threadPage.css";

export type ForumUser = {
    id: string;
    name: string;
    avatar: string;
};

export type Post = {
    id: string;
    author: ForumUser;
    text: string;
};

export type Thread = {
    id: string;
    title: string;
    posts: Post[];
};

const mockThread: Thread = {
    id: "1",
    title: "Lorem ipsum dolor sit amet",
    posts: [
        {
            id: "123",
            author: {
                id: "1",
                name: "F0rum_P0st3r",
                avatar: "path/to/avatar_1",
            },
            text: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit.`,
        },
        {
            id: "324",
            author: { id: "2", name: "H3ll0W0R1D", avatar: "path/to/avatar_2" },
            text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis.`,
        },
    ],
};

const getThread = (): Promise<Thread> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockThread);
        }, 1000);
    });
};

export const ThreadPage = () => {
    const [thread, setThread] = useState<null | Thread>(null);

    const onReplySubmit = useCallback(() => {
        console.log("Ответили в тред");
    }, []);

    let threadComponent;

    if (!thread) {
        getThread().then((thread) => {
            setThread(thread);
        });

        threadComponent = <Spinner color="light" />;
    } else {
        threadComponent = (
            <div className="thread">
                <Title
                    level={4}
                    className="thread__title"
                    text={thread.title}
                />
                <div className="thread__posts">
                    {thread.posts.map((post) => {
                        return (
                            <div key={post.id} className="post">
                                <div className="post__author">
                                    <Avatar
                                        src={post.author.avatar}
                                        size="small"
                                    />
                                    <span className="post__author-name">
                                        {post.author.name}
                                    </span>
                                </div>
                                <div className="post__text">{post.text}</div>
                                <hr className="post__hr" />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <Fragment>
            <LeftSideButton className="leftside-button_fixed" />
            <div className="thread-page">
                <div className="thread-page__container">
                    <div className="thread-page__body">
                        <Title level={1} text="Форум" />
                        {threadComponent}
                        <Title
                            className="thread-page__reply-title"
                            level={2}
                            text="Ответить"
                        />
                        <Form
                            onSubmit={onReplySubmit}
                            render={({ handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <Field name="message">
                                        {({ textarea }) => (
                                            <textarea
                                                {...textarea}
                                                className="forum__message-area"
                                                placeholder="Сообщение"
                                                rows={3}
                                            ></textarea>
                                        )}
                                    </Field>
                                    <Button
                                        className=""
                                        type="submit"
                                        stretch={true}
                                        style="primary"
                                        clickHandler={() => {}}
                                    >
                                        Отправить
                                    </Button>
                                </form>
                            )}
                        ></Form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
