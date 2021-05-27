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
import { getMessages } from "../../redux/selectors/widgets/forum";
import { useParams } from "react-router-dom";
import InputField from "../../components/inputField";
import { Message } from "../../../entities/thread";
import { MessagesState } from "../../redux/reducers/widgets/messages";

export type replyFormData = {
    username: string;
    message: string;
    threadId: number;
};

type ThreadPageProps = {
    messages: MessagesState;
    fetchMessages: (id: number) => void;
    createMessage: (data: replyFormData) => Promise<void>;
};

export const ThreadPage = ({
    messages,
    fetchMessages,
    createMessage,
}: ThreadPageProps) => {
    const { id } = useParams();

    const onReplySubmit = useCallback((data: replyFormData) => {
        data.threadId = Number(id);

        createMessage(data).then(() => {
            fetchMessages(id);
        });
    }, []);

    let threadComponent;

    useEffect(() => {
        fetchMessages(id);
    }, []);

    if (!messages.messages.thread.length) {
        threadComponent = <Spinner color="light" />;
    } else {
        threadComponent = (
            <div className="thread">
                {
                    <Title
                        level={4}
                        className="thread__title"
                        text={messages.messages.thread[0]!.title}
                    />
                }
                <div className="thread__posts">
                    {
                        // явно напортачил, но сроки горят
                        messages.messages.messages.map((msg: Message) => {
                            return (
                                <div key={msg.id} className="post">
                                    <div className="post__author">
                                        <Avatar src="" size="small" />
                                        <span className="post__author-name">
                                            {msg.author_name}
                                        </span>
                                    </div>
                                    <div className="post__text">
                                        {msg.content}
                                    </div>
                                    <hr className="post__hr" />
                                </div>
                            );
                        })
                    }
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
    messages: getMessages(state),
});

export default connect(mapStateToProps, { fetchMessages, createMessage })(
    ThreadPage
);
