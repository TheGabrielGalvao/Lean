import { action } from "typesafe-actions"
import { IUser } from "../User/types"
import { EAuthActions } from "./types"


export const loginRequest = (data: IUser) => {
    return {
        type: EAuthActions.LOGIN_REQUEST,
        data: data
    }
}

export const loginSuccess = (data: IUser) => {

    return {
        type: EAuthActions.LOGIN_SUCCESS,
        data: data,
        isAuthenticated: true
    }
}

export const loginFailure = () => action(EAuthActions.LOGIN_FAILURE)

export const logoutRequest = () => {

    return {
        type: EAuthActions.LOGOUT_REQUEST,
    }
}

export const logoutSuccess = () => {
    return {
        type: EAuthActions.LOGOUT_SUCCESS,
    }
}

export const logoutFailure = () => action(EAuthActions.LOGOUT_FAILURE)