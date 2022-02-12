import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // state
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value) // state 변경
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault(); // 버튼만 눌러도 refresh 되는 현상 제거

        // 전송할 data
        let reqBody = {
            email: Email,
            password: Password
        }

        // react component => action으로 전송하는 걸 dispatch라고 함
        dispatch(loginUser(reqBody)) // user_action.js 에 loginUser() 위치
            .then(response => {
                console.log(reqBody)
                console.log(response)
                if (response.payload.loginSuccess) { // reducer에서 결과값을 주면
                    navigate('/')
                } else {
                    alert('Error')
                }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                {/* value에 state 맵핑 */}
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage
