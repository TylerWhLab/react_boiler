import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LandingPage(props) {
    const navigate = useNavigate();

    useEffect(() => { // 현재 페이지에 들어오자 마자 실행할 내용 => useEffect에 작성
        axios.get('/api/hello') // 백엔드 /api/hello 에 GET method request
            .then(response => { console.log(response.data) }) // response
    }, [])


    // 로그아웃
    const onClickHandler = () => {
        axios.get(`/api/user/logout`)
            .then(response => {
                if (response.data.success) {
                    navigate("/login")
                } else {
                    alert('로그아웃 실패')
                }
            })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>

            {/* 로그아웃 버튼 */}
            <button onClick={onClickHandler}>
                로그아웃
            </button>

        </div>
    )
}

export default LandingPage
