// import {queryPost} from "./source";

export default function reducer(state = {

    userList: {},
    userFetchState: 0,
    error: {}



}, action) {

    switch (action.type) {

        case 'FETCH_USER_PENDING':
        {
            return {...state, userFetchState: 1}
        }
        case 'FETCH_USER_FULFILLED':
        {
            return {...state, userFetchState: 2, userList: action.payload}
        }
        case 'FETCH_USER_REJECTED':
        {
            return {...state, userFetchState: 3, error: action.payload}
        }

    }

    return state
}