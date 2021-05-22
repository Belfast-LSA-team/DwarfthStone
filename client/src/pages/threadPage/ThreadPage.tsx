import React, { useCallback, Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Field } from "react-final-form";
import {
    fetchMessages,
    createMessage,
} from "../../redux/thunks/forum/messages";
import Avatar from "../../components/avatar";
import Button from "../../components/button";
import LeftSideButton from "../../components/leftsideButton";
import Spinner from "../../components/spinner";
import Title from "../../components/title";
import { State } from "../../redux/reducers";
import "./threadPage.css";
import { Thread } from "../../../../server/db/models/thread";
import { fetchThreads } from "../../redux/thunks/forum/threads";
import { getMessages } from "../../redux/selectors/widgets/forum";

export const ThreadPage = ({ thread, fetchThreadById, createMessage }: any) => {
    const onReplySubmit = useCallback(() => {
        console.log("Ответили в тред");
    }, []);

    let threadComponent;

    useEffect(() => {
        fetchThreads();
    }, []);

    if (!thread) {
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
                    {/*thread.messages.map(() => {
                        return null;
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
                    })*/}
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

const mapStateToProps = (state: State) => ({
    thread: getMessages(state),
});

export default connect(mapStateToProps, { fetchMessages, createMessage })(
    ThreadPage
);
