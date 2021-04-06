import postSource from './source';

export function fetchPost() {
    return {
        type: 'FETCH_POST',
        payload: postSource.fetchPost()
    }
}
export function fetchOrder() {
    return {
        type: 'FETCH_ORDER',
        payload: postSource.fetchOrder()
    }
}

export function setPost(setPost) {
        return{type: 'SET_POST_REQ', payload:setPost};
}


export function mutatePost(request) {

    return function (dispatch) {
        dispatch({
            type: 'MUTATE_POST',
            payload: postSource.createPost(request)
        });
    }
}

export function mutateOrder(request) {

    return function (dispatch) {
        dispatch({
            type: 'MUTATE_ORDER',
            payload: postSource.createOrder(request)
        });
    }
}

export function clearPost() {
    return {
        type: 'CLEAR_POST'
    }
}

export function clearComment() {
    return {
        type: 'CLEAR_COMMENT'
    }
}
export function setComment(setComment) {
    return{type: 'SET_COMMENT_REQ', payload:setComment};
}


export function mutateComment(request) {

    return function (dispatch) {
        dispatch({
            type: 'MUTATE_COMMENT',
            payload: postSource.createComment(request)
        });
    }
}

export function deletePost(id) {
    return function (dispatch) {

        dispatch({
            type: 'DELETE_POST',
            payload: postSource.deletePost(id)
        });
    }
}

export function updatePost(id) {
    return function (dispatch) {

        dispatch({
            type: 'UPDATE_POST',
            payload: postSource.updatePost(id)
        });
    }
}