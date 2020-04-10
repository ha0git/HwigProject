import React, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode';
import {Modal} from 'react-bootstrap'
import "./Join.css";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

window.$(document).ready(function(){
 window.$("input[type=checkbox]:first").click(function(){
   if(!window.$("input[type=checkbox]:first").attr('checked') || window.$("input[type=checkbox]:first").attr('checked') == false){
    window.$("input[type=checkbox]").attr('checked', 'true')
   }else{
    window.$("input[type=checkbox]").removeAttr('checked')
   }
})
})



export default function Join(props) {
  const [show, setShow] = useState(false);
  const [checkId, setCheckId] = useState(false)
  const [mem_id, setId] = useState("")
  const [mem_pw, setPw] = useState("")
  const [checkPw, setCheckPw] = useState("")
  const [mem_name, setName] = useState("")
  const [checkEmail, setCheckEmail] = useState(false)
  const [mem_email, setEmail] = useState("")
  const [mem_tel, setTel] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [mem_addr, setAddress] = useState("")
  const [mem_zipcode, setZipcode] = useState("")
  const [mem_pribacy, setIsChecked] = useState(false)
  const [redirect, setRedirect] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(window.$("#join_check1").is(":checked") , window.$("#join_check2").is(":checked") , window.$("#join_check3").is(":checked"))
      if(window.$("#join_check1").is(":checked") && window.$("#join_check2").is(":checked") && window.$("#join_check3").is(":checked")){
        setIsChecked(true)
        console.log('체크true실행')
      }
      const sumAddr= address1 + " " + address2;
      setAddress(sumAddr);
      console.log('체크값', mem_pribacy, mem_addr)
      
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
      }else if(!checkEmail){
        alert('이메일 중복을 확인해주세요.')
      }else if(!mem_tel){
        alert('전화번호를 입력해주세요.')
      }else if(!mem_addr && !mem_zipcode){
        alert('주소를 입력해주세요.')
      }else if(!mem_pribacy){
        alert('이용약관에 동의해주세요.')
      }else{
          
          console.log('제출 실행',{ mem_id, mem_pw, mem_name, mem_email, mem_tel, mem_addr, mem_zipcode})
          props.onSubmit({ mem_id, mem_pw, mem_name, mem_email, mem_tel, mem_addr, mem_zipcode});
      }
  }


  const handleAddress = () =>(
      <Modal id="join_address_modal" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>주소 검색</Modal.Title>
      </Modal.Header>
              <Modal.Body>
                      <DaumPostcode
                          onComplete={handleComplete}
                      />
              </Modal.Body>
      </Modal>)

      //다음 주소 검색 
  const handleComplete = (data) => {
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
      console.log(data.zonecode) // 우편번호
      setAddress1(fullAddress)
      setZipcode(data.zonecode)
      if(setAddress1){
          handleClose()
      }
      
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
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
                      <input type="text" value={mem_id} onChange={(e)=> setId(e.target.value)} placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"></input>
                      <input type="button" onClick={()=>setCheckId(props.checkingId(mem_id))} value="중복확인"/>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">비밀번호*</td>
                    <td className="memCols2">
                      <input type="password" value={mem_pw} onChange={(e)=> setPw(e.target.value)} placeholder="비밀번호를 입력해주세요"></input>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">비밀번호확인*</td>
                    <td className="memCols2">
                      <input type="password" value={checkPw} onChange={(e)=> setCheckPw(e.target.value)} placeholder="비밀번호를 한 번 더 입력해주세요"></input>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">이름*</td>
                    <td className="memCols2">
                      <input type="text" value={mem_name} onChange={(e)=>setName(e.target.value)} placeholder="고객님의 이름을 입력해주세요"></input>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">이메일*</td>
                    <td className="memCols2">
                      <input type="email" value={mem_email} onChange={(e)=> setEmail(e.target.value)} placeholder="예:KICCAMPUS@hwig.com"></input>
                      <input type="button" onClick={()=>setCheckEmail(props.checkingEmail(mem_email))} value="이메일 중복확인"/>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">휴대폰*</td>
                    <td className="memCols2">
                      <input type="text" value={mem_tel} onChange={(e)=>setTel(e.target.value)} placeholder="숫자만 입력해주세요"></input>
                      <input type="button" value="인증번호 받기"/>
                    </td>
                  </tr>
                  <tr className="join_name">
                    <td className="memCols1">배송주소*</td>
                    <td className="memCols2">
                      {/* <DaumPostcode onComplete={handleAddress} /> */}
                      {handleAddress()}
                      <input className="join_zipcode" type="text" value={mem_zipcode} onChange={(e)=>setZipcode(e.target.value)}></input>
                      <input type="button" id="join_address"  onClick={handleShow} value="주소검색"/>
                      <input type="text" value={address1} onChange={(e)=>setAddress1(e.target.value)}></input>
                      <input type="text" value={address2} onChange={(e)=>setAddress2(e.target.value)}></input>
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
                    <input type="checkbox" id="join_check1"></input>
                    <span></span>이용약관 <span className="text_sub">(필수)</span>
                  </label>
                  <a href="#" className="btn_essential">약관보기 ></a>
                </div>
                <div className="agree_ch">
                  <label className="ch">
                    <input type="checkbox" id="join_check2"></input>
                    <span></span>개인정보처리방침 <span className="text_sub">(필수)</span>
                  </label>
                  <a href="#" className="btn_essential">약관보기 ></a>
                </div>
                <div className="agree_ch">
                  <label className="ch">
                    <input type="checkbox" id="join_check3"></input>
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
      </form>
    </>
  )
}