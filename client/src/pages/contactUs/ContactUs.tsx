import React, { Fragment } from "react";
import { Form } from "react-final-form";
import InputField from "../../components/inputField";
import { SiteLayout } from "../../layouts/SiteLayout/SiteLayout";
import Button from "../../components/button";
import { onSubmitHandler } from "../../utils/onSubmit";
import {
    nameLabel,
    emailLabel,
    titleLabel,
    messageLabel,
} from "../../data/content";

import "./contactUs.css";

export const ContactUs = (): JSX.Element => {
    const formValues = [
        {
            placeholder: nameLabel,
            name: "name",
            type: "text",
        },
        {
            placeholder: emailLabel,
            name: "email",
            type: "email",
        },

        {
            placeholder: titleLabel,
            name: "title",
            type: "text",
        },
        {
            placeholder: messageLabel,
            name: "message",
            rows: "5",
        },
    ];
    const renderInputs = () => {
        return formValues.map((item) => {
            return <InputField className="contact__input" {...item} />;
        });
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <SiteLayout bgColor="important">
            <div className="contact">
                <div className="contact-left">
                    <Form
                        //validate={validate}
                        onSubmit={onFormSubmit}
                        render={({ handleSubmit }) => (
                            <form
                                className="contact__form"
                                onSubmit={handleSubmit}
                            >
                                {renderInputs()}
                                <Button
                                    className="contact__btn"
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
                <div className="contact-right"></div>
            </div>
        </SiteLayout>
    );
};
