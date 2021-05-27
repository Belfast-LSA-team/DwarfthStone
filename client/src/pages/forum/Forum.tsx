import React, { useCallback, Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import { fetchThreads, createThread } from "../../redux/thunks/forum/threads";
import { getThreads } from "../../redux/selectors/widgets/forum";
import Button from "../../components/button";
import InputField from "../../components/inputField";
import LeftSideButton from "../../components/leftsideButton";
import Spinner from "../../components/spinner";
import Title from "../../components/title";
import Papers from "./components/papers";
import "./forum.css";
import { State } from "../../redux/reducers";
import { Thread } from "../../../entities/thread";

export type CreateThreadData = {
    title: string;
    username: string;
    message: string;
};

type ForumProps = {
    threads: Thread[];
    fetchThreads: () => void;
    createThread: (data: CreateThreadData) => Promise<void>;
};

export const Forum = ({ threads, fetchThreads, createThread }: ForumProps) => {
    const onNewThreadSubmit = useCallback((data: CreateThreadData) => {
        if (!data.title || !data.username || !data.message) {
            return { [FORM_ERROR]: "Заполните все поля." };
        }

        createThread(data).then(() => {
            fetchThreads();
        });
    }, []);

    let threadList;

    useEffect(() => {
        fetchThreads();
    }, []);

    if (!threads) {
        threadList = <Spinner color="light" />;
    } else {
        if (!threads.length) {
            threadList = (
                <div className="forum__no-threads">Здесь пока пусто...</div>
            );
        } else {
            threadList = threads.map((thread: Thread) => {
                if (thread === null) {
                    return null;
                }

                return (
                    <Fragment key={thread.id}>
                        <li className="forum__thread">
                            <Link
                                to={`/forum/thread/${thread.id}`}
                                className="forum__thread-title"
                            >
                                {thread.title}
                            </Link>
                            <Link
                                to={`/forum/thread/${thread.id}`}
                                className="forum__thread-right"
                            >
                                <span className="forum__thread-replies">
                                    {thread.repliesCount}
                                </span>
                                <Papers />
                            </Link>
                        </li>
                        <hr className="forum__thread-hr" />
                    </Fragment>
                );
            });
        }
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
                            render={({ submitError, handleSubmit }) => (
                                <form onSubmit={handleSubmit}>
                                    <InputField
                                        type="text"
                                        name="title"
                                        placeholder="Заголовок"
                                        stretch={true}
                                    />
                                    <InputField
                                        className="forum__input_margin"
                                        type="text"
                                        name="username"
                                        placeholder="Имя"
                                        stretch={true}
                                    />
                                    <Field
                                        className="forum__message-area"
                                        name="message"
                                        component="textarea"
                                        placeholder="Сообщение"
                                        rows={3}
                                    />
                                    {submitError ? (
                                        <div className="forum__submit-error">
                                            {submitError}
                                        </div>
                                    ) : null}
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

const mapStateToProps = (state: State) => ({
    threads: getThreads(state),
});

export default connect(mapStateToProps, { fetchThreads, createThread })(Forum);
