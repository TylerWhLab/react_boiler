import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types';

export default function (state = {}, action) { // 현재 state은 빈 상태{}
    switch (action.type) { // action.js 에서 return 시 지정한 type
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload } // ... : 스프레드 오퍼레이터 - state={} 빈 상태를 그대로 가져옴, payload(response data)를 loginSuccess 에 넣음
            break;
        case REGISTER_USER:
            return { ...state, register: action.payload }
            break;
        case AUTH_USER:
            return { ...state, userData: action.payload }
            break;
        default:
            return state;
    }
}