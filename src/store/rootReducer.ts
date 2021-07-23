import { combineReducers } from 'redux'
import { authReducer, userReducer } from './ducks'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    user: userReducer,
    auth: authReducer,
    form: formReducer
})