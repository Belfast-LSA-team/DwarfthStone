import type { AxiosError } from "axios";
import axios from "axios";

const axiosInstanse = axios.create({
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

const host = "https://ya-praktikum.tech/api/v2/";

type ApiGetMethod = "auth/user" | "api/threads";
type ApiPostMethod = "auth/signin" | "auth/signup" | "auth/logout";
type Param = string | string[] | number | number[];

export type ErrorType = AxiosError;

export function get<R>(
    apiMethod: ApiGetMethod,
    params: Record<string, Param> = {}
): Promise<R> {
    return axiosInstanse
        .get<R>(`${host}/${apiMethod}`, { params })
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
        .post<R>(`${host}/${apiMethod}`, { params })
        .then(({ data }) => data);
}
