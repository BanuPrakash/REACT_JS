import {combineReducers} from 'redux'
import taskReducer from './taskReducer'
import profileReducer from './profileReducer'

// root reducer
export default combineReducers(({
    "tasks": taskReducer,
    "profile": profileReducer
}))