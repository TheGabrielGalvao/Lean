import { put } from "redux-saga/effects";
import * as AuthActions from "./actions";

export function* login(action?: any) {
    try {
        if (action.data) {

            sessionStorage.setItem("user", JSON.stringify(action.data))

            yield put(AuthActions.loginSuccess(action.data))

        }
    }
    catch (ex) {
        yield put(AuthActions.loginFailure())
    }
}

export function* logout(action?: any) {
    try {
        if (action.data) {
            sessionStorage.clear()
            yield put(AuthActions.logoutSuccess())
        }
    }
    catch (ex) {
        yield put(AuthActions.logoutFailure())
    }
}

