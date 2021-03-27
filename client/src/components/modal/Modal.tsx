import React from "react";
import Modal from "react-modal";
import classnames from "classnames";
import { toggleElement } from "../../utils/index";

import "./modal.css";

type ModalProps = {
    className?: string;
    children: React.ReactNode;
};

function closeModalOnOutClick(event: React.MouseEvent) {
    if ((event.target as HTMLElement).classList.contains("modal")) {
        toggleElement(".modal");
    }
}

export const Modal = (props: ModalProps) => {
    const { className, children } = props;
    const classNames = classnames("modal", className);

    return (
        <div
            className={classNames}
            onClick={(e: React.MouseEvent) => closeModalOnOutClick(e)}
        >
            {children}
        </div>
    );
};
