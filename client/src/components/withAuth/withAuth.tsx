import React from "react";
import { useSelector, useDispatch } from "react-redux";

import type { State } from "../../redux/reducers";

import { fetchUserInfoThunk } from "../../redux/thunks/user";
import { getIsAuth } from "../../redux/selectors/widgets/user";

export function withAuth<T>(Component: React.ComponentType<T>) {
    return function (props: T) {
        const isAuth = useSelector(getIsAuth);
        const dispatch = useDispatch();

        dispatch(fetchUserInfoThunk());

        return <Component {...props} />;
    };
}
