import { action } from "typesafe-actions"
import { EUserActions, IUser } from "./types"

export const loadRequest = () => action(EUserActions.LOAD_REQUEST)

export const loadSuccess = (data: IUser[]) => {
    return {
        type: EUserActions.LOAD_SUCCESS,
        data: data,
    }
}

export const loadFailure = () => action(EUserActions.LOAD_FAILURE)


export const saveRequest = (data: IUser) => {
    return {
        type: EUserActions.SAVE_REQUEST,
        data: data
    }
}

export const saveSuccess = (data?: IUser) => {
    if (data?.id !== null) {
        return {
            type: EUserActions.EDIT_SUCCESS,
            data: data,
        }
    }

    return {
        type: EUserActions.SAVE_SUCCESS,
        data: data,
    }

}

export const saveFailure = () => action(EUserActions.SAVE_FAILURE)


export const editRequest = (data: IUser) => {

    return {
        type: EUserActions.EDIT_REQUEST,
        data: data
    }
}

export const editFailure = () => action(EUserActions.EDIT_FAILURE)

export const removeRequest = (data: IUser) => {

    return {
        type: EUserActions.REMOVE_REQUEST,
        data: data
    }
}

export const removeSuccess = (data: IUser) => {
    return {
        type: EUserActions.REMOVE_SUCCESS,
        data: data,
    }
}

export const removeFailure = () => action(EUserActions.REMOVE_FAILURE)