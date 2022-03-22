import { User } from '../types/types';
import { Action } from '../types/action.interface';

import * as types from '../types/types';
const initialState: User = {
    isAuthenticated: false,
    user: {}
}

const userReducer = (state: any = initialState, action: Action) => {
    switch (action.type) {
        case types.LOGIN:
            state = {
                ...state,
                isAuthenticated: true,
                user: action.payload
            }
            break;

        case types.LOGOUT:
            state = {
                ...state,
                isAuthenticated: false,
                user: {}
            }
            break;

        default: return state;
    }

    return state;
}

export default userReducer;