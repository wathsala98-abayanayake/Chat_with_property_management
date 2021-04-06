class Auth {

    static authenticateUser(value) {
        localStorage.setItem('accessToken', value);
    }
    static deAuthenticateUser() {
        localStorage.removeItem('accessToken');
    }

    static isUserAuthenticated() {
        return localStorage.getItem('accessToken') !== null;
    }

    static currentUser(value) {
        sessionStorage.setItem('user', value);
    }
    static getCurrentUser() {
        sessionStorage.getItem('user');
    }
    static removeCurrentUser() {
        sessionStorage.removeItem('user');
    }

}

export {Auth};