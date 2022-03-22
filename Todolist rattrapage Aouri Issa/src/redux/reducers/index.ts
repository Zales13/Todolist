import { combineReducers } from 'redux';

import userReducer from './user.reducer';

export const reducers = combineReducers({ userReducer });

export type RootState = ReturnType<typeof reducers>