import React, {useEffect,useState} from 'react'
import './MyPageModify.css'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'
import queryString from 'query-string'
import { Redirect } from 'react-router-dom'

export default function ModifyUserInfo(props) {
    const [show, setShow] = useState(false);
    const [checkId, setCheckId] = useState(false)
    const [mem_id, setId] = useState("")
    const [mem_pw, setPw] = useState("")
    const [checkPw, setCheckPw] = useState("")
    const [mem_name, setName] = useState("")
    const [mem_email, setEmail] = useState("")
    const [mem_tel, setTel] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(mem_id.length < 6){
          alert('6자 이상의 아이디를 입력해주세요.')
        }else if(!checkId){
          alert('아이디 중복을 확인해주세요.')
        }else if(mem_pw.length < 10){
          alert('10자 이상의 비밀번호를 입력해주세요.')
        }else if(mem_pw !== checkPw){
          alert('비밀번호가 다릅니다.')
        }else if(!mem_name){
          alert('이름을 입력해주세요.')
        }else if(!mem_email || !props.CheckEmailF(mem_email)){
          alert('정확하게 이메일을 입력해주세요. (abc@abc.com)')
        }else if(!mem_tel){
          alert('전화번호를 입력해주세요.')
        }else if(mem_pw == userInfo.mem_PW){
            alert('비밀번호가 일치하지 않읍니다.')
        }else{
            console.log('제출 실행',{ mem_id, mem_pw, mem_name, mem_email, mem_tel})
            props.onSubmit({ mem_id, mem_pw, mem_name, mem_email, mem_tel});
            alert('저장되었습니다.')
        }
      } 
    const userInfo = props.userInfo
    return (
        <div className="mypage-modify-container">
                <div className="mypage-modify-title">개인정보 수정</div>
                <div className="mypage-modify-subtitle">기본정보</div>
                <div className="mypage-modify-subtitle2">*필수입력사항</div>
                <div className="mypage-modify-line"></div>
                <div>
                    <form onSubmit={handleSubmit}>
                    <div className="mypage-modigy-form-container">
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">아이디*</td>
                            <td><input className="mypage-modify-inputbox" type="text" onChange={(e) => setId(e.target.value)} defaultValue={userInfo.mem_ID}></input>
                                <input type="button" onClick={() => setCheckId(props.checkingId(mem_id))} value="중복확인" /></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">현재 비밀번호</td>
                            <td><input className="mypage-modify-inputbox" type="password"/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">새 비밀번호</td>
                            <td><input className="mypage-modify-inputbox" type="password" onChange={(e) => setPw(e.target.value)} placeholder="비밀번호를 입력해주세요"/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">새 비밀번호 확인</td>
                            <td><input className="mypage-modify-inputbox" type="password" onChange={(e) => setCheckPw(e.target.value)} placeholder="비밀번호를 한 번 더 입력해주세요"/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">이름*</td>
                            <td><input className="mypage-modify-inputbox" type="text" defaultValue={userInfo.mem_name} onChange={(e) => setName(e.target.value)}/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">이메일*</td>
                            <td><input className="mypage-modify-inputbox" type="email" defaultValue={userInfo.mem_email} onChange={(e) => setEmail(e.target.value)}/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">휴대폰</td>
                            <td><input className="mypage-modify-inputbox" type="text" defaultValue={userInfo.mem_tel} onChange={(e) => setTel(e.target.value)}/></td>
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
