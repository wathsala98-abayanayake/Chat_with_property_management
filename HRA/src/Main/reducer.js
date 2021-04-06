// import {queryPost} from "./source";

export default function reducer(state = {
    userReq:{},

    userList:{},
    loginRequest: {},
    login:{},
    loginState: 0,
    error: {},
    MutateState:0,

}, action) {

    switch (action.type) {

        case 'SET_LOGIN_REQUEST': {
            return {...state, loginRequest: action.payload}
        }

        case 'LOGIN_PENDING': {
            return {...state, loginState: 1, login: action.payload}
        }
        case 'LOGIN_FULFILLED': {
            return {...state, login: action.payload, loginState: 2}
        }
        case 'LOGIN_REJECTED': {
            return {...state, loginState: 3, error: action.payload}
        }


        case 'SET_USER_REQ': {
            return {...state, userReq: action.payload}
        }

        case 'MUTATE_USER_PENDING' : {
            return {...state, MutateState: 1}
        }
        case 'MUTATE_USER_FULFILLED' : {
            return {...state, MutateState: 2,userList:action.payload}
        }
        case 'MUTATE_USER_REJECTED': {
            return {...state, MutateState: 3, error: action.payload}
        }
    }

    return state
}