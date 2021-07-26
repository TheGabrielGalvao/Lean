import { Reducer } from "redux"
import { EUserActions, IUserState } from "./types"


const INITIAL_STATE: IUserState = {
    data: [],
    loading: false,
    error: false,
}

export const userReducer: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EUserActions.LOAD_REQUEST:
            return { ...state, loading: true, tmp: INITIAL_STATE.tmp }
        case EUserActions.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.data }
        case EUserActions.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [], }

        case EUserActions.SAVE_REQUEST:
            return { ...state, loading: true }
        case EUserActions.SAVE_SUCCESS:
            return { ...state, data: [...state.data, action.data], loading: false, error: false, tmp: INITIAL_STATE.tmp }
        case EUserActions.SAVE_FAILURE:
            return { ...state, loading: false, error: true }

        case EUserActions.REMOVE_REQUEST:
            return { ...state, loading: true }
        case EUserActions.REMOVE_SUCCESS:
            return { ...state, loading: false, error: false, data: [...state.data.filter(x => x.id !== action.data.id)], }
        case EUserActions.REMOVE_FAILURE:
            return { ...state, loading: false, error: true }

        case EUserActions.EDIT_REQUEST:
            return { ...state, tmp: action.data }
        case EUserActions.EDIT_SUCCESS:
            return { ...state, data: [...state.data], loading: false, error: false, tmp: INITIAL_STATE.tmp }
        case EUserActions.EDIT_FAILURE:
            return { ...state, loading: false, error: true }

        default:
            return state
    }
}

