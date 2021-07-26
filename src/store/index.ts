import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from '@redux-saga/core'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { IUserState } from './ducks/User/types'
import { IAuthState } from './ducks/Auth/types'
import { FormStateMap } from 'redux-form'

export interface ApplicationState {
    user: IUserState
    auth: IAuthState
    form: FormStateMap
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

export default store