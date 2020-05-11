import React, {useEffect,useState} from 'react'
import './MyPageModify.css'
import { Modal } from 'react-bootstrap'
import DaumPostcode from 'react-daum-postcode';

export default function ModifyUserInfo(props) {
    const userInfo = props.userInfo
    const [show, setShow] = useState(false);
    const [mem_id, setId] = useState(userInfo.mem_id)
    const [mem_pw, setPw] = useState(null)
    const [mem_newpw, setNewPw] = useState(null)
    const [checkPw, setCheckPw] = useState(null)
    const [mem_name, setName] = useState(userInfo.mem_name)
    const [mem_email, setEmail] = useState(userInfo.mem_email)
    const [mem_tel, setTel] = useState(userInfo.mem_tel)
    const [checkEmail, setCheckEmail] = useState(true)
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [mem_addr, setAddress] = useState(userInfo.mem_addr)
    const [mem_zipcode, setZipcode] = useState("")
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        const sumAddress= "(" + mem_zipcode + ") "+ address1 + ", " + address2;
        setAddress(sumAddress);
        console.log('체크값',  mem_addr)

        if(mem_id.length < 6){
          alert('6자 이상의 아이디를 입력해주세요.')
        }else if(mem_pw === null){
            alert('기존 비밀번호를 입력해주세요.')
        }else if(mem_newpw){
            if(mem_newpw.length < 10){
            alert('10자 이상의 비밀번호를 입력해주세요.')}
            else{
              console.log('제출 실행',{mem_pw,mem_newpw, mem_email, mem_tel,mem_addr})
              props.onSubmit({mem_pw,mem_newpw, mem_email, mem_tel,mem_addr});
            }
        }else if(mem_newpw !== checkPw){
          alert('비밀번호가 다릅니다.')
        }else if(!mem_name){
          alert('이름을 입력해주세요.')
        }else if(!mem_email || !props.CheckEmailF(mem_email)){
          alert('정확하게 이메일을 입력해주세요. (abc@abc.com)')
        }else if(!checkEmail){
            alert('이메일 중복을 확인해주세요.')
        }else if(!mem_tel){
          alert('전화번호를 입력해주세요.')
        }else if(mem_pw == userInfo.mem_pw){
            alert('비밀번호가 일치하지 않읍니다.')
        }else if(!mem_addr){
            alert('주소를 입력해주세요.')
        }else{
            console.log('제출 실행',{mem_pw,mem_newpw, mem_email, mem_tel,mem_addr})
            props.onSubmit({mem_pw,mem_newpw, mem_email, mem_tel,mem_addr});
        }
      } 
      const handleAddress = () => (
        <Modal id="mypage_address_modal" show={show} onHide={handleClose}>
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
        if (setAddress1) {
          handleClose()
        }
    
      }
   
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
                            <td className="mypage-modify-input-text-title">아이디</td>
                            <td><input className="mypage-modify-inputbox" type="text" onChange={(e) => setId(e.target.value)} Value={userInfo.mem_id} readOnly></input></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">현재 비밀번호*</td>
                            <td><input className="mypage-modify-inputbox" type="password" onChange={(e) => setPw(e.target.value)} placeholder="비밀번호를 입력해주세요"/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">새 비밀번호</td>
                            <td><input className="mypage-modify-inputbox" type="password" onChange={(e) => setNewPw(e.target.value)} placeholder="새 비밀번호를 입력해주세요"/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">새 비밀번호 확인</td>
                            <td><input className="mypage-modify-inputbox" type="password" onChange={(e) => setCheckPw(e.target.value)} placeholder="새 비밀번호를 한 번 더 입력해주세요"/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">이름*</td>
                            <td><input className="mypage-modify-inputbox" type="text" Value={userInfo.mem_name} onChange={(e) => setName(e.target.value)} readOnly/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">이메일*</td>
                            <td><input className="mypage-modify-inputbox" type="email" defaultValue={userInfo.mem_email} onClick={() => setCheckEmail(false)} onChange={(e) => setEmail(e.target.value)}/>
                            <input type="button" onClick={() => setCheckEmail(props.checkingEmail({mem_email}))} value="이메일 중복확인" />
                            </td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">휴대폰</td>
                            <td><input className="mypage-modify-inputbox" type="text" defaultValue={userInfo.mem_tel} onChange={(e) => setTel(e.target.value)}/></td>
                        </tr>
                        <tr className="mypage-modify-input">
                            <td className="mypage-modify-input-text-title">배송주소*</td>
                            <td className="mypage_memCols2">
                                {/* <DaumPostcode onComplete={handleAddress} /> */}
                                {handleAddress()}
                                <input className="mypage_zipcode" type="text" value={mem_zipcode} onChange={(e) => setZipcode(e.target.value)}></input>
                                <input type="button" id="mypage_address" onClick={handleShow} value="주소검색" />
                                <input type="text" value={address1} onChange={(e) => setAddress1(e.target.value)}></input>
                                <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)}></input>
                            </td>
                        </tr>
                    </div>

                        
                       
                        
                       
                        
                        <div className="mypage-modify-form-submit-buttons">
                            <input className="mypage-modify-form-submit1" type="submit" value="탈퇴하기"/>
                            <input className="mypage-modify-form-submit2" type="submit" value="회원정보 수정"/>
                        </div>
                    </form>
                </div>
        </div>
    )
}
