import React, { useEffect } from 'react';
//import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';

// higher order component : 특정 컴포넌트에 접근하기 전 거쳐야 하는 컴포넌트

export default function (SpecificComponent, option, adminRoute = null) {

    // option
    // null    =>  아무나 출입이 가능한 페이지
    // true    =>  로그인한 유저만 출입이 가능한 페이지
    // false   =>  로그인한 유저는 출입 불가능한 페이지

    // adminRoute : admin 만 접근 가능, adminRoute = null은 default 설정한것(ES6 문법)

    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        const navigate = useNavigate();

        useEffect(() => {

            // action으로 전송
            dispatch(auth()).then(response => { // action 함수명은 auth()

                // 로그인 하지 않은 상태 
                if (!response.payload.isAuth) {
                    if (option) {
                        navigate('/login')
                    }
                } else {
                    // 로그인 한 상태 
                    if (adminRoute && !response.payload.isAdmin) {
                        navigate('/')
                    } else {
                        if (option === false)
                            navigate('/')
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent />
        )
    }
    
    return <AuthenticationCheck />
}