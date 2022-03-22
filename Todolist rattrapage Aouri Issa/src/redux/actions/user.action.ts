import * as types from '../types/types';

export const setLogin = (payload : any) => ({
    type: types.LOGIN,
    payload
})

export const setLogout = () => ({
    type: types.LOGOUT
});