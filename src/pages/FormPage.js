import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../style/form.css';

const FormPage = () => {
    const [status, setStatus] = useState("로그인");
    
    useEffect(() => {
        let screen = document.querySelector(".screen");
        if(status == "로그인") {
            screen.style.left = "50%";
        } else {
            screen.style.left = "0%";
        }
    });
    
    return(
        <div>
            {/* <button onClick = {() => setStatus(status == "login" ? "join" : "login")}>아무거나</button> */}
            <div className="screen flex-center">
            <button onClick = {() => setStatus(status == "로그인" ? "회원가입" : "로그인")}>{status}</button>
            </div>
            <div className="content">
                <div className="join flex-col-center">
                    <div className="title mb-3">리뷰온 회원가입</div>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="join_id" className="col-form-label">아이디</label>
                            <input id="join_id" type="text" className="form-input"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="join_name" className="col-form-label">이름</label>
                            <input id="join_name" type="text" className="form-input"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="join_pw" className="col-form-label">비밀번호</label>
                            <input id="join_pw" type="text" className="form-input"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="join_pw2" className="col-form-label">비밀번호 확인</label>
                            <input id="join_pw2" type="text" className="form-input"/>
                        </div>
                        <button className="form-btn">회원가입</button>
                    </form>
                </div>
                <div className="login flex-col-center">
                    <div className="title mb-3">리뷰온 로그인</div>
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="login_id" className="col-form-label">아이디</label>
                            <input id="login_id" type="text" className="form-input"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="login_pw" className="col-form-label">비밀번호</label>
                            <input id="login_pw" type="text" className="form-input"/>
                        </div>
                        <button className="form-btn">로그인</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default FormPage;
