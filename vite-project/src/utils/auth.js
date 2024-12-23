import Cookies from 'js-cookie';

const TokenKey = 'Token';

export function setToken(token) {
    return Cookies.set(TokenKey, token);
}

export function getToken() {
    return Cookies.get(TokenKey);
}