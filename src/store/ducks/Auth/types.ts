import { IUser } from "../User/types";

export enum EAuthActions {
    LOGIN_REQUEST = "@auth/LOGIN_REQUEST",
    LOGIN_SUCCESS = "@auth/LOGIN_SUCCESS",
    LOGIN_FAILURE = "@auth/LOGIN_FAILURE",

    LOGOUT_REQUEST = "@auth/LOGOUT_REQUEST",
    LOGOUT_SUCCESS = "@auth/LOGOUT_SUCCESS",
    LOGOUT_FAILURE = "@auth/LOGOUT_FAILURE",
}

export interface IAuthState {
    data?: IUser
    isAuthenticated: boolean
    loading: boolean
    error: boolean
}