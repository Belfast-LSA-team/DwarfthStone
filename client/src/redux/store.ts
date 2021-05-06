import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import type { State } from "./reducers";
import { rootReducer } from "./reducers";


const composeEnhancers = typeof window != 'undefined' ?
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;

export const createApp = (initialState: State) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );


  return { store };
};
