import React, { Fragment, useState, useEffect } from "react";
import { GeneralErrorProps } from "../../types/errorTypes";
import "./generalError.css";

export const GeneralError = ({
    message,
    errorStatus,
    errorCode,
}: GeneralErrorProps): JSX.Element => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 7000);
    }, [loading]);
    const messageHandler = () => {
        const messageContent = [];
        if (errorStatus) {
            messageContent.push(errorStatus);
        }
        messageContent.push(message);
        if (errorCode) {
            messageContent.push(errorCode);
        }
        return messageContent.join(" ");
    };
    return (
        <Fragment>
            {loading && (
                <div className="generalError">
                    <div className="generalError_content">
                        <div className="generalError_content_message">
                            <p>{messageHandler()}</p>
                        </div>
                        <div className="generalError_content_close">
                            <div
                                onClick={() => setLoading(false)}
                                className="inner_close"
                            >
                                <svg
                                    width="9"
                                    height="9"
                                    viewBox="0 0 9 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line
                                        x1="7.7953"
                                        y1="1.35358"
                                        x2="0.724228"
                                        y2="8.42465"
                                        stroke="#F9F6F6"
                                    />
                                    <line
                                        x1="8.08834"
                                        y1="8.35358"
                                        x2="1.01727"
                                        y2="1.28252"
                                        stroke="#F9F6F6"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};
