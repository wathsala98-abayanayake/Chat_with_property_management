
import {authSource} from './source'


export function setLoginRequest(variables) {
    return{type: 'SET_LOGIN_REQUEST', payload:variables};
}
export function login(variables) {
    return{type: 'LOGIN', payload:authSource.login(variables)};
}
export function mutateUser(variables) {

    return function (dispatch) {
        dispatch({
            type: 'MUTATE_USER',
            payload: authSource.signUp(variables)
        });
    }
}

export function setUser(userReq) {
    return{type: 'SET_USER_REQ', payload:userReq};
}