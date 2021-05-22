import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import { rootReducer } from "../../client/src/redux/reducers";
import { Request } from "express";
export const createStoreServer = (req: Request) => {
    const axiosInstance = axios.create({
        baseURL: "https://ya-praktikum.tech/api/v2/",
        // headers: { cookie: req.cookie || '' },
    });

    const store = createStore(
        rootReducer,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );

    return store;
};
