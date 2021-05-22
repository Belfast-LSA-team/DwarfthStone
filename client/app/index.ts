import type { AxiosError } from "axios";
import axios from "axios";

const axiosInstanse = axios.create({
    //TODO: and dev - prod url
    baseURL: "http://localhost:3010/api",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

type ApiGetMethod = "auth/user" | "db/threads" | string;
type ApiPostMethod =
    | "auth/signin"
    | "auth/signup"
    | "auth/logout"
    | "db/threads"
    | "db/threads/message";
type Param = string | string[] | number | number[];

export type ErrorType = AxiosError;

export function get<R>(
    apiMethod: ApiGetMethod,
    params: Record<string, Param> = {}
): Promise<R> {
    return axiosInstanse
        .get<R>(`/yandex/${apiMethod}`, { params })
        .then(({ data }) => data);
}

export function getLocal<R>(
    apiMethod: ApiGetMethod,
    params: Record<string, Param> = {}
): Promise<R> {
    return axiosInstanse
        .get<R>(`/${apiMethod}`, { params })
        .then(({ data }) => data);
}

export function post<R>(
    apiMethod: ApiPostMethod,
    params: Record<string, Param> = {}
): Promise<R> {
    return axiosInstanse
        .post<R>(`/yandex/${apiMethod}`, { params })
        .then(({ data }) => data);
}

export function postLocal<R>(
    apiMethod: ApiPostMethod,
    params: Record<string, Param> = {}
): Promise<R> {
    return axiosInstanse
        .post<R>(`/${apiMethod}`, params)
        .then(({ data }) => data);
}
