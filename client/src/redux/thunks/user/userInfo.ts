import type { Dispatch } from "redux";
import { resolveUserInfo } from "../../../../app/resolvers/user/userInfo";
import {
  fetch,
  fetchFailed,
  fetchFulfilled,
} from "../../actions/user/userInfo";

export const fetchUserInfo = () => (dispatch: Dispatch) => {
  dispatch(fetch());
  return resolveUserInfo()
    .then((res) => dispatch(fetchFulfilled(res)))
    .catch((err) => dispatch(fetchFailed(err)));
};
