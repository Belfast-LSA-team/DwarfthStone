import { combineReducers } from "redux-immer";
import produce from "immer";

export type Collections = {};

export const collections = combineReducers(produce, {});
