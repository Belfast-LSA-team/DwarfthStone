import React, { useCallback, Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { fetchThreads } from "../../redux/thunks/forum/threads";
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

export const Forum = ({ threads, fetchThreads }: any) => {
    const onNewThreadSubmit = useCallback(() => {
        console.log("Создали тред");
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
                                    {thread.replies_count}
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

const mapStateToProps = (state: State) => ({
    threads: getThreads(state),
});

export default connect(mapStateToProps, { fetchThreads })(Forum);
