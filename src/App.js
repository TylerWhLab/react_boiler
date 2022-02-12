import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom"; // 화면 이동에 필요한 lib

// 화면 가져오기
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* 엔드포인트 별 렌더링할 화면 지정 */}

          {/* // option
              // null    =>  아무나 출입이 가능한 페이지
              // true    =>  로그인한 유저만 출입이 가능한 페이지
              // false   =>  로그인한 유저는 출입 불가능한 페이지 */}

          <Route path="/" element = { Auth(LandingPage, null) } />
          <Route path="/login" element = { Auth(LoginPage, false) } />
          <Route path="/register" element = { Auth(RegisterPage, false) } />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
