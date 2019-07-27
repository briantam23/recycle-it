import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import users from './users';

export interface reducerLayout {
  state: string[],
  action: object | null,
};

const reducer = combineReducers({
    users
});

export default createStore(reducer, applyMiddleware(logger, thunk));
