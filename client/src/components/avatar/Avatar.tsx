import React, { useState, useCallback } from "react";
import classnames from "classnames";

import "./Avatar.css";

type AvatarProps = {
    className?: string;
    src: string;
    size: "small" | "medium" | "large";
};

export const Avatar = (props: AvatarProps) => {
    const { className, size } = props;
    const [path, setPath] = useState(props.src);
    const classNames = classnames("avatar", `avatar_size-${size}`, className);

    const onError = useCallback(() => {
        setPath("images/avatar-default.png");
    }, []);

    return <img onError={onError} className={classNames} src={path} />;
};
