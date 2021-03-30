import React, { useState } from "react";
import { Form } from "react-final-form";
import InputField from "../../components/inputField";
import { SiteLayout } from "../../layouts/SiteLayout/SiteLayout";
import Button from "../../components/button";
import Title from "../../components/title";
import GeneralError from "../../components/generalError";
import { GeneralErrorProps } from "../../types/errorTypes";
import { ContactFormData } from "../../types/formDataTypes";
import { validateContact } from "../../utils/validate";
import {
    nameLabel,
    emailLabel,
    titleLabel,
    messageLabel,
    contactUsTitle,
    thankYouText,
} from "../../data/content";

import "./contactUs.css";

export const ContactUs = (): JSX.Element => {
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState<GeneralErrorProps | null>(null);

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
            return (
                <InputField
                    stretch={true}
                    className="contact__input"
                    {...item}
                />
            );
        });
    };

    const onSubmitHandler = async (e: ContactFormData) => {
        try {
            // after successful submission show message
            setIsSent(true);
        } catch (err) {
            setError(err);
        }
    };

    return (
        <SiteLayout bgColor="secondary">
            <div className="contact">
                <div className="contact-left">
                    <Title text={contactUsTitle} level={1} />
                    {isSent ? (
                        <div className="contact__message-success">
                            <p>{thankYouText}</p>
                        </div>
                    ) : (
                        <Form
                            validate={validateContact}
                            onSubmit={onSubmitHandler}
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
                    )}
                </div>
                <div className="contact-right">
                    <Title level={3} text="Наши социальные сети" />
                </div>
            </div>
            {error != null ? (
                <GeneralError
                    message={error.message}
                    errorCode={error.errorCode}
                    errorStatus={error.errorStatus}
                />
            ) : null}
        </SiteLayout>
    );
};
