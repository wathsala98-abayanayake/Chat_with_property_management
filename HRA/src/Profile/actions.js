import profileSource from './source';

export function fetchUser() {
    return {
        type: 'FETCH_USER',
        payload: profileSource.fetchUser()
    }
}