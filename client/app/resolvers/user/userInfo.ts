import { get } from "../..";

export const resolveUserInfo = () =>
    get("auth/user").then((userInfo) => {
        console.log(userInfo);

        userInfo;
    });
