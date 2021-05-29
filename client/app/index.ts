import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";

const localHost = "http://localhost:3010/api";
const yandxHost = "https://ya-praktikum.tech/api/v2";

const defaultAxiosConfig = {
    //TODO: and dev - prod url
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
};

export const paths = {
    signin: "auth/signin",
    signup: "auth/signup",
    logout: "auth/logout",
    userInfo: "yandex/api/v2/auth/user",
    changeProfile: "user/profile",
    changeAvatar: "user/profile/avatar",
    changePassword: "user/password",
    threads: "db/threads",
    threadsMessages: "db/threads/message",
} as const;

export type ApiRoute = typeof paths[keyof typeof paths];
type Param = string | string[] | number | number[];

export type ErrorType = AxiosError;

export function get<R>(
    apiMethod: ApiRoute,
    config: AxiosRequestConfig = defaultAxiosConfig
): Promise<R> {
    return axios
        .get<R>(`${localHost}/${apiMethod}`, config)
        .then(({ data }) => data);
}

export function getLocal<R>(
    apiMethod: ApiRoute,
    config: AxiosRequestConfig = defaultAxiosConfig
): Promise<R> {
    return axios
        .get<R>(`${localHost}/${apiMethod}`, config)
        .then(({ data }) => data);
}

export function post<R>(
    apiMethod: ApiRoute,
    data: Record<string, Param> = {},
    config: AxiosRequestConfig = defaultAxiosConfig
): Promise<R> {
    return axios
        .post<R>(`${yandxHost}/${apiMethod}`, data, config)
        .then(({ data }) => data);
}

export function put<R>(
    apiMethod: ApiRoute,
    data: Record<string, Param | FileList> = {},
    config: AxiosRequestConfig = defaultAxiosConfig
): Promise<R> {
    return axios
        .put<R>(`${yandxHost}/${apiMethod}`, data, config)
        .then(({ data }) => data);
}

export function postLocal<R>(
    apiMethod: ApiRoute,
    data: Record<string, Param> = {},
    config: AxiosRequestConfig = defaultAxiosConfig
): Promise<R> {
    return axios
        .post<R>(`${localHost}/${apiMethod}`, data, config)
        .then(({ data }) => data);
}
