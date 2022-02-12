import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';


export function loginUser(reqBody) {

    const loginResponse = axios.post('/api/user/login', reqBody)
        .then(response => response.data)

    // Reducer로 전송
    return {
        type: LOGIN_USER, // 어떤 동작인지 명시
        payload: loginResponse // response data, payload는 정해진 key
    }
}

export function registerUser(dataToSubmit) {

    const registerResponse = axios.post('/api/user/register', dataToSubmit)
        .then(response => response.data)

    return {
        type: REGISTER_USER,
        payload: registerResponse
    }
}



export function auth() {

    const request = axios.get('/api/user/auth')
        .then(response => response.data)

    return {
        type: AUTH_USER,
        payload: request
    }
}






