import type { AxiosError, AxiosRequestConfig } from "axios";
import axios from "axios";

const defaultAxiosConfig = {
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
};

const host = "https://ya-praktikum.tech/api/v2";

type ApiGetMethod = "auth/user";
type ApiPostMethod = "auth/signin" | "auth/signup" | "auth/logout";
type ApiPutMethod = "user/profile" | "user/profile/avatar" | "user/password";
type Param = string | string[] | number | number[];

export type ErrorType = AxiosError;

export function get<R>(
    apiMethod: ApiGetMethod,
    config: AxiosRequestConfig = defaultAxiosConfig
): Promise<R> {
    return axios
        .get<R>(`${host}/${apiMethod}`, config)
        .then(({ data }) => data);
}

export function post<R>(
    apiMethod: ApiPostMethod,
    data: Record<string, Param> = {},
    config: AxiosRequestConfig = defaultAxiosConfig
): Promise<R> {
    return axios
        .post<R>(`${host}/${apiMethod}`, data, config)
        .then(({ data }) => data)
        .catch((err) => err);
}

export function put<R>(
    apiMethod: ApiPutMethod,
    data: Record<string, Param | FileList> = {},
    config: AxiosRequestConfig = defaultAxiosConfig
): Promise<R> {
    return axios
        .put<R>(`${host}/${apiMethod}`, data, config)
        .then(({ data }) => data)
        .catch((err) => err);
}
