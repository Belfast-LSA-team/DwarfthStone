import React, { useCallback, Fragment, useState } from "react";
import { Form, Field } from "react-final-form";
import InputField from "../../components/inputField";
import LeftSideButton from "../../components/leftsideButton";
import Spinner from "../../components/spinner";
import Title from "../../components/title";
import "./thread.css";

export const Thread = () => {
    return (
        <Fragment>
            <LeftSideButton className="leftside-button_fixed" />
            <div className="thread">
                <div className="thread__container">
                    <div className="thread__body">
                        <Title level={1} text="Форум" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
