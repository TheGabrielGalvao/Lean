import { Reducer } from "redux"
import { EAuthActions, IAuthState } from "./types"


const INITIAL_STATE: IAuthState = {
    isAuthenticated: JSON.parse(sessionStorage.getItem("isAuthenticated") || "false"),
    data: JSON.parse(sessionStorage.getItem("user") || "[]"),
    loading: false,
    error: false
}

export const authReducer: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case EAuthActions.LOGIN_REQUEST:
            return { ...state, loading: true }
        case EAuthActions.LOGIN_SUCCESS:
            return { ...state, data: action.data, loading: false, error: false, isAuthenticated: true }
        case EAuthActions.LOGIN_FAILURE:
            return { ...state, loading: false, error: true, isAuthenticated: false }

        case EAuthActions.LOGOUT_REQUEST:
            return { ...state, loading: true }
        case EAuthActions.LOGOUT_SUCCESS:
            return { ...state, loading: false, error: false, data: INITIAL_STATE.data, isAuthenticated: false }
        case EAuthActions.LOGOUT_FAILURE:
            return { ...state, loading: false, error: true }

        default:
            return state
    }
}

