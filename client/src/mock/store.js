import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

export const mockStore = (state = {}) => {
    return configureMockStore([thunkMiddleware])(state);
};
