export interface User {
    isAuthenticated: boolean;

    user: Object | null | undefined;
}

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";