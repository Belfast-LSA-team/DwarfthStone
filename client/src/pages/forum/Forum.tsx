import React, { useCallback, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import Button from "../../components/button";
import InputField from "../../components/inputField";
import LeftSideButton from "../../components/leftsideButton";
import Spinner from "../../components/spinner";
import Title from "../../components/title";
import Papers from "./components/papers";
import "./forum.css";

type Thread = {
    id: number;
    title: string;
    replies: number;
};

const mockThreads = [
    { id: 1, title: "Lorem ipsum dolor sit amet", replies: 3 },
    { id: 2, title: "Consectetur adipiscing elit", replies: 0 },
    { id: 3, title: "Sed do eiusmod tempor incididunt", replies: 15 },
];

const getThreads = (): Promise<Thread[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockThreads);
        }, 1000);
    });
};

export const Forum = () => {
    const [threadsLoaded, setThreadsLoaded] = useState(false);
    const [threads, setThreads] = useState([] as Thread[]);

    const onNewThreadSubmit = useCallback(() => {
        console.log("Создали тред");
    }, []);

    let threadList;

    if (!threadsLoaded) {
        getThreads().then((threads) => {
            setThreadsLoaded(true);
            setThreads(threads);
        });

        threadList = <Spinner color="light" />;
    } else {
        threadList = threads.map((thread: Thread) => {
            return (
                <Fragment key={thread.id}>
                    <li className="forum__thread">
                        <Link
                            to={`/thread/${thread.id}`}
                            className="forum__thread-title"
                        >
                            {thread.title}
                        </Link>
                        <Link
                            to={`/thread/${thread.id}`}
                            className="forum__thread-right"
                        >
                            <span className="forum__thread-replies">
                                {thread.replies}
                            </span>
                            <Papers />
                        </Link>
                    </li>
                    <hr className="forum__thread-hr" />
                </Fragment>
            );
        });
    }

    return (
        <Fragment>
            <LeftSideButton className="leftside-button_fixed" />
            <div className="forum">
                <div className="forum__container">
                    <div className="forum__body">
                        <Title level={1} text="Форум" />
                        <ul className="forum__thread-list">{threadList}</ul>
                        <Title level={2} text="Создать тему" />
                        <Form
                            onSubmit={onNewThreadSubmit}
                            render={({ handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <InputField
                                        type="text"
                                        name="title"
                                        placeholder="Заголовок"
                                        stretch={true}
                                    />
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
