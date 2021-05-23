import React, { useState, useCallback } from "react";
import classnames from "classnames";

import AvatarDefault from "../../assets/images/avatar-default.png";
import "./Avatar.css";

type AvatarProps = {
    className?: string;
    src: string | null;
    size: "small" | "medium" | "large";
};

const host = "https://ya-praktikum.tech/api/v2/resources";

export const Avatar = ({ className, size, src }: AvatarProps) => {
    const path = src ? `${host}/${src}` : AvatarDefault;
    const classNames = classnames("avatar", `avatar_size-${size}`, className);

    return <img className={classNames} src={path} />;
};
