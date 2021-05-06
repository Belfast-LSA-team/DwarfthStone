import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { rootReducer } from '../../client/src/redux/reducers';

export const createStoreServer = (req) => {
  // console.log(req);
  const axiosInstance = axios.create({
    baseURL: 'https://ya-praktikum.tech/api/v2',
    headers: { cookie: req.cookie || '' },
  });

  const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};
