import { combineReducers } from "redux-immer";
import produce from "immer";

import type { User } from "./user";
import { user } from "./user";
import type { Threads } from "./threads";
import { threads } from "./threads";

export const widgets = combineReducers(produce, {
    user,
    threads,
});

export type Widgets = {
    user: User;
    threads: Threads;
};
