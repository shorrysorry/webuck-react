import React, { useState } from 'react';
import './Login.scss';

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleIdInput = e => {
    if (e.target.classList.contains('email')) {
      setId(e.target.value);
    } else if (e.target.classList.contains('pw')) {
      setPw(e.target.value);
    }
  };

  return (
    <div className="loginSubin">
      <section id="loginSection">
        <h2 id="title">WeBucks</h2>

        <div className="inputSection">
          <div className="idWrapper">
            <input
              className="loginInput email"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
              onChange={handleIdInput}
              value={id}
            />
          </div>
          <div className="pwWrapper">
            <input
              className="loginInput pw"
              type="password"
              placeholder="비밀번호"
              onChange={handleIdInput}
              value={pw}
            />
            <i className="fa-solid fa-eye-slash eye" />
          </div>
          <button className="loginBtn" onClick={() => {}}>
            로그인
          </button>
        </div>

        <div className="forgetPw">비밀번호를 잊으셨나요?</div>
      </section>
    </div>
  );
}

export default Login;
