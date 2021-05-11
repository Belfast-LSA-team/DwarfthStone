import type { ThunkAction } from "redux-thunk";
import type { Action, AnyAction } from "redux";
import type { State } from "../reducers";

export type ThunkCreator<
    TActions extends Action = AnyAction,
    TParams = void,
    TReturn = void
> = (params: TParams) => ThunkAction<TReturn, State, undefined, TActions>;

export type ConnectedThunk<
    TThunkCreator extends ThunkCreator<any, any, any>
> = (
    params: TThunkCreator extends ThunkCreator<any, infer TParams>
        ? TParams
        : never
) => ReturnType<ReturnType<TThunkCreator>>;
