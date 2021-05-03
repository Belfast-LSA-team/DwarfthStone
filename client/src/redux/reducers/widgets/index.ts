import { combineReducers } from "redux-immer";
import produce from "immer";

import type { User } from "./user";
import { user } from "./user";

export const widgets = combineReducers(produce, {
    user,
});

export type Widgets = {
    user: User;
};
