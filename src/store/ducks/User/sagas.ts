import { put } from "redux-saga/effects";
import * as UserActions from "./actions";
import { loginRequest } from '../Auth/actions'
import { EUserActions, IUser } from "./types";


export function* load() {
    try {
        const data: IUser[] = JSON.parse(localStorage.getItem("users") || '[]')

        yield put(UserActions.loadSuccess(data))
    }
    catch (ex) {
        yield put(UserActions.loadFailure())
    }
}

export function* save(action?: any) {
    try {
        const users: IUser[] = (action.data.id > 0) ? JSON.parse(localStorage.getItem("users") || '[]').filter((x: IUser) => x.id !== action.data.id) : JSON.parse(localStorage.getItem("users") || '[]')

        const user: IUser = {
            id: { ...action.data.id || users.length + 1 },
            ...action.data
        }

        users.push(user)

        localStorage.setItem('users', JSON.stringify(users))

        yield put(UserActions.saveSuccess(user))
        yield put(loginRequest(user))

    }
    catch (ex) {
        if (action.type === EUserActions.SAVE_FAILURE) {
            yield put(UserActions.saveFailure())
        }
        if (action.type === EUserActions.EDIT_FAILURE) {
            yield put(UserActions.editFailure())
        }

    }
}

export function* remove(action?: any) {
    try {
        const users: IUser[] = JSON.parse(localStorage.getItem("users") || '[]')

        localStorage.setItem('users', JSON.stringify(users.filter(x => x.id !== action.data.id)))

        yield put(UserActions.removeSuccess(action.data))
    }
    catch (ex) {
        yield put(UserActions.removeFailure())
    }
}

