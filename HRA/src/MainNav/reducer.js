import update from 'immutability-helper';

export default function reducer(state = {

    postList: {},
    postFetchState: 0,
    orderList: {},
    orderFetchState: 0,
    postMutateList: {},
    PostState:0,
    orderMutateList: {},
    OrderState:0,
    PostUpdateState:0,
    postUpdateList:{},
    postReq:{},
    mutateState:0,
    error: {},
    commentReq:{
        text:''
    },
    commentList:{},
    commentState:0,
    deletePost:0,



}, action) {

    switch (action.type) {

        case 'CLEAR_POST': {
            return {...state, postReq: {}, mutateState: 0}
        }
        case 'CLEAR_COMMENT': {
            return {...state, commentReq: {}, commentState: 0}
        }

        case 'FETCH_POST_PENDING':
        {
            return {...state, postFetchState: 1}
        }
        case 'FETCH_POST_FULFILLED':
        {
            return {...state, postFetchState: 2, postList: action.payload}
        }
        case 'FETCH_POST_REJECTED':
        {
            return {...state, postFetchState: 3, error: action.payload}
        }

        case 'FETCH_ORDER_PENDING':
        {
            return {...state, orderFetchState: 1}
        }
        case 'FETCH_ORDER_FULFILLED':
        {
            return {...state, orderFetchState: 2, orderList: action.payload}
        }
        case 'FETCH_ORDER_REJECTED':
        {
            return {...state, orderFetchState: 3, error: action.payload}
        }


        case 'SET_POST_REQ': {
            return {...state, postReq: action.payload}
        }

        case 'MUTATE_POST_PENDING' : {
            return {...state, PostState: 1}
        }
        case 'MUTATE_POST_FULFILLED' : {
            return {...state, PostState: 2,postMutateList:action.payload}
        }
        case 'MUTATE_POST_REJECTED': {
            return {...state, PostState: 3, error: action.payload}
        }

        case 'MUTATE_ORDER_PENDING' : {
            return {...state, OrderState: 1}
        }
        case 'MUTATE_ORDER_FULFILLED' : {
            return {...state, OrderState: 2,orderMutateList:action.payload}
        }
        case 'MUTATE_ORDER_REJECTED': {
            return {...state, OrderState: 3, error: action.payload}
        }

        case 'UPDATE_POST_PENDING' : {
            return {...state, PostUpdateState: 1}
        }
        case 'UPDATE_POST_FULFILLED' : {
            return {...state, PostUpdateState: 2,postUpdateList:action.payload}
        }
        case 'UPDATE_POST_REJECTED': {
            return {...state, PostUpdateState: 3, error: action.payload}
        }




        case 'SET_COMMENT_REQ': {
            return {...state, commentReq: action.payload}
        }

        case 'MUTATE_COMMENT_PENDING' : {
            return {...state, commentState: 1}
        }
        case 'MUTATE_COMMENT_FULFILLED' : {
            return {...state, commentState: 2,commentList:action.payload}
        }
        case 'MUTATE_COMMENT_REJECTED': {
            return {...state, commentState: 3, error: action.payload}
        }

        case 'DELETE_POST_PENDING' : {
            return {...state, deletePost: 1}
        }
        case 'DELETE_POST_FULFILLED' : {
            //  return update(state, {
            //     postList: {
            //         $unset: [action.payload]
            //     },
            //      deletePost: {$set: 2}
            // })
           return {...state, deletePost: 2,deletedPost:action.payload}
        }
        case 'DELETE_POST_REJECTED': {
            return {...state, deletePost: 3, error: action.payload}
        }

    }

    return state
}