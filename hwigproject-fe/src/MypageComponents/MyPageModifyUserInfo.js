import React from 'react'
import './MyPageModifyUserInfo.css'
import img_event_check from "../images/img_event_check.webp"

export default function ModifyUserInfo() {
    return (
        <div className="mypage-modify-container">
                <div className="mypage-modify-title">개인정보 수정</div>
                <div className="mypage-modify-subtitle">기본정보</div>
                <div className="mypage-modify-subtitle2">*필수입력사항</div>
                <div className="mypage-modify-line"></div>
                <div>
                    <form>
                    <div className="mypage-modigy-form-container">
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">아이디*</td>
                            <td><input className="mypage-modify-inputbox" type="text" value="abcde" readOnly/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">현재 비밀번호</td>
                            <td><input className="mypage-modify-inputbox" type="password"/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">새 비밀번호</td>
                            <td><input className="mypage-modify-inputbox" type="password"/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">새 비밀번호 확인</td>
                            <td><input className="mypage-modify-inputbox" type="password"/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">이름*</td>
                            <td><input className="mypage-modify-inputbox" type="text" value="홍길동"/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">이메일*</td>
                            <td><input className="mypage-modify-inputbox" type="email" value="abcde@abc.com"/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">휴대폰</td>
                            <td><input className="mypage-modify-inputbox" type="text" value="01012345678"/></td>
                        </tr>
                    </div>

                        <div className="mypage-modify-title2">이용약관 동의*</div>
                       
                        <div className="mypage-modify-line"></div>
                       
                        <div className="mypage-modify-checkbox-container">
                        <div className="agree_ch">
                            <label className="ch">
                                <input type="checkbox"></input>
                                <span></span>무료배송,할인쿠폰 등 혜택/정보 수신 <span className="text_sub">(선택)</span>
                            </label>
                            <div className="ch_emailsms">
                                <label className="ch">
                                    <input type="checkbox"></input>
                                    <span></span>SMS <span className="text_sub">(선택)</span>
                                </label>
                                <label className="ch">
                                    <input type="checkbox"></input>
                                    <span></span>이메일 <span className="text_sub">(선택)</span>
                                </label>
                            </div>
                        </div>
                        <div className="mypage-modify-form-submit-buttons">
                            <input className="mypage-modify-form-submit1" type="submit" value="탈퇴하기"/>
                            <input className="mypage-modify-form-submit2" type="submit" value="회원정보 수정"/>
                        </div>
                        </div>
                    </form>
                </div>
        </div>
    )
}
