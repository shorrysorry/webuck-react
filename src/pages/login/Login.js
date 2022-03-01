import React from 'react'
import "./Login.css"

function Login() {
    return (
    <>
    <section id="loginSection">
    <h2 id="title">WeBukcs</h2>

    <div className="logindiv" action="">
        <div className="idWrapper">
            <input className="loginInput email"type="text" placeholder="전화번호,사용자 이름 또는 이메일" />
        </div>
        <div className="pwWrapper">
            <input className="loginInput pw" type="password" placeholder="비밀번호" />
            <button className="fa-solid fa-eye-slash eye"></button>
            {/* i tag 적용 다시 해야함 임시로 button으로 변경함 */}
        </div>
        <button 
            className="loginBtn"
            onClick={() => {}}>
            로그인
        </button>
    </div>

    <div cldivssName="forgetPw">비밀번호를 잊으셨나요?</div>      
    </section>
    </>
    )
}

export default Login;