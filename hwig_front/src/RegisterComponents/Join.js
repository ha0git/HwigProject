import React, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode';
import "./Join.css";
import img_event_check from "../images/img_event_check.webp"
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default function Join() {
  const handleAddress = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }

    console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }
  return (
    <>
      <div className="join">
        <div className="join_content">
          <div className="join_location"><span>홈 > 회원가입</span></div>
          <div className="join_tit"><h2>회원가입</h2></div>
          <div className="tit_sub"><span>* 필수입력사항</span></div>
          <div className="join_main">
            <div className="join_board">
              <table className="tb1_comm">
                <tbody>
                  <tr className="join_name">
                    <td className="memCols1">아이디*</td>
                    <td className="memCols2">
                      <input type="text" placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"></input>
                      <a href="#"><span>중복확인</span></a>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">비밀번호*</td>
                    <td className="memCols2">
                      <input type="text" placeholder="비밀번호를 입력해주세요"></input>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">비밀번호확인*</td>
                    <td className="memCols2">
                      <input type="text" placeholder="비밀번호를 한 번 더 입력해주세요"></input>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">이름*</td>
                    <td className="memCols2">
                      <input type="text" placeholder="고객님의 이름을 입력해주세요"></input>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">이메일*</td>
                    <td className="memCols2">
                      <input type="text" placeholder="예:KICCAMPUS@hwig.com"></input>
                      <a href="#"><span>이메일 중복확인</span></a>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">휴대폰*</td>
                    <td className="memCols2">
                      <input type="text" placeholder="숫자만 입력해주세요"></input>
                      <a href="#"><span>인증번호 받기</span></a>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">배송주소*</td>
                    <td className="memCols2">
                      {/* <DaumPostcode onComplete={handleAddress} /> */}
                      <a href="#"><span>주소검색</span></a>
                      <input type="text"></input>
                      <input type="text"></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="join_agree">
              <div className="agree_tit">
                <h3>이용약관동의*</h3>
                <p>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</p>
              </div>
              <div className="agree_ch">
                <label className="ch">
                  <input type="checkbox"></input>
                  <span></span>전체동의
                  </label>
              </div>
              <div className="agree_subCh">
                <div className="agree_ch">
                  <label className="ch">
                    <input type="checkbox"></input>
                    <span></span>이용약관 <span className="text_sub">(필수)</span>
                  </label>
                  <a href="#" className="btn_essential">약관보기 ></a>
                </div>
                <div className="agree_ch">
                  <label className="ch">
                    <input type="checkbox"></input>
                    <span></span>개인정보처리방침 <span className="text_sub">(필수)</span>
                  </label>
                  <a href="#" className="btn_essential">약관보기 ></a>
                </div>
                <div className="agree_ch">
                  <label className="ch">
                    <input type="checkbox"></input>
                    <span></span>개인정보처리방침 <span className="text_sub">(선택)</span>
                  </label>
                  <a href="#" className="btn_essential">약관보기 ></a>
                </div>
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
                  <div className="sms_info">
                    <img src={img_event_check}></img>
                  </div>
                </div>
                <div className="agree_ch">
                  <label className="ch">
                    <input type="checkbox"></input>
                    <span></span>본인은 만 14세 이상입니다. <span className="text_sub">(필수)</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="join_btn">
              <button type="submit">가입하기</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}