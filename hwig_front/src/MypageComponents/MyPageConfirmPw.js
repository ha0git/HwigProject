import React,{useState} from 'react'
import './MyPageConfirmPw.css'
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'


export default function MyPageConfirmPw(props) {
    const userInfo = props.userInfo
    const [mem_pw, setPw] = useState("")

    const handleSubmit = (e) => {
        console.log("실행")
        e.preventDefault();
        if(!mem_pw){
            console.log("없음")
            alert('비밀번호를 입력하세요.') 
        }else{
            if (mem_pw == userInfo.mem_PW) {
                console.log("성공")
                window.location.href = '/mypage/modify'
            }else {
                console.log("없음")
                alert('비밀번호를 제대로 입력하세요.') 
            }
        }
    }
    return (
        
        <div className="mypage-confirm-container">
            <div className="mypage-confirm-title">개인정보 수정</div>
                <div className="mypage-confirm-line"></div>
            <div>
                <div className="mypage-confirm-pw-title">비밀번호 재확인</div>
                <div className="mypage-confirm-pw-subtitle">회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mypage-confirm-form">
                    <div>아이디</div>
                    <div><input className="mypage-confirm-inputbox-id" type="text" value={userInfo.mem_ID} readOnly/></div>
                    <div>비밀번호</div>
                    <div><Form.Control 
                                className="login-input-box" 
                                size="lg" 
                                type="password" 
                                placeholder="비밀번호를 입력해주세요."
                                onChange={(e)=>setPw(e.target.value)}
                                value={mem_pw}
                            /></div>
                </div>
                <div className="mypage-confirm-submit-container">
                    <input className="mypage-confirm-submit" type="submit" value="확인"/>
                </div>
            </form>
        </div>
    )
}
