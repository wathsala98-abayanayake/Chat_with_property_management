import {applyMiddleware, createStore} from 'redux'
import {combineReducers} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import profileReducer from'./Profile/reducer'
import postReducer from './MainNav/reducer'
import authReducer from './Main/reducer'
const middleware = applyMiddleware(promise(), thunk, createLogger());



let stuStore = createStore(combineReducers({
    profileReducer,
    postReducer,
    authReducer,

}), {}, middleware);

export default stuStore;