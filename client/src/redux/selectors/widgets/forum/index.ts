import type { State } from "../../../reducers";

export const getThreads = (state: State) => state.widgets.threads.threads;

export const getMessages = (state: State) => state.widgets.messages;
