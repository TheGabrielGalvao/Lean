import { all, takeLatest } from 'redux-saga/effects'
import { login, logout } from './ducks/Auth/sagas'
import { EAuthActions } from './ducks/Auth/types'
import { load, remove, save } from './ducks/User/sagas'
import { EUserActions } from './ducks/User/types'

export default function* rootSaga() {
    yield all([
        takeLatest(EUserActions.LOAD_REQUEST, load),
        takeLatest(EUserActions.SAVE_REQUEST, save),
        takeLatest(EUserActions.REMOVE_REQUEST, remove),
        takeLatest(EAuthActions.LOGIN_REQUEST, login),
        takeLatest(EAuthActions.LOGOUT_REQUEST, logout)
    ])
}

