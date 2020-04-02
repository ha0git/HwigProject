import React from 'react'
import './MyPageConfirmPw.css'

export default function MyPageConfirmPw() {
    return (
        
        <div className="mypage-confirm-container">
            <div className="mypage-confirm-title">개인정보 수정</div>
                <div className="mypage-confirm-line"></div>
            <div>
                <div className="mypage-confirm-pw-title">비밀번호 재확인</div>
                <div className="mypage-confirm-pw-subtitle">회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.</div>
            </div>
            <form>
                <div className="mypage-confirm-form">
                    <div>아이디</div>
                    <div><input className="mypage-confirm-inputbox-id" type="text" value="abcde" readOnly/></div>
                    <div>비밀번호</div>
                    <div><input className="mypage-confirm-inputbox-pw" type="password"/></div>
                </div>
                <div className="mypage-confirm-submit-container">
                    <input className="mypage-confirm-submit" type="submit" value="확인"/>
                </div>
            </form>
        </div>
    )
}
