import { post } from "../../";

export const resolveLogout = () => post("auth/logout").then((res) => res);
