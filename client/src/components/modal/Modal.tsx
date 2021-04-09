import React from "react";
import ReactModal from "react-modal";
import classnames from "classnames";
import Button from "../button";

import "./modal.css";

type ModalProps = {
    className?: string;
    children: React.ReactNode;
    isOpen: boolean;
    closeModalHandler: () => void;
};

export const Modal = ({
    className,
    children,
    isOpen,
    closeModalHandler,
}: ModalProps) => {
    const classNames = classnames("modal__content", className);

    ReactModal.setAppElement("#root");

    return (
        <ReactModal
            isOpen={isOpen}
            portalClassName="modal__protal"
            overlayClassName="modal__overlay"
            className={classNames}
            onRequestClose={closeModalHandler}
            contentElement={(props, children) => (
                <div {...props}>{children}</div>
            )}
        >
            {children}
            <Button
                type="button"
                style="dark"
                className="button_close-modal"
                clickHandler={closeModalHandler}
            >
                x
            </Button>
        </ReactModal>
    );
};
