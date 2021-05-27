import { post } from "../../";

export const resolveSignin = () => post("auth/signin").then((res) => res);
