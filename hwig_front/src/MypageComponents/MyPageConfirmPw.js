import React,{useState} from 'react'
import './MyPageConfirmPw.css'
import {withRouter,Link} from 'react-router-dom'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'
import MyPageModify from '../Containers/MyPageModifyPage'


function MyPageConfirmPw(props) {
    const userInfo = props.userInfo
    const [log,setLog] = useState(false)
    const mem_id = userInfo.mem_id
    const [mem_pw, setpw] = useState("")
    const sendMemData = (uri, data) => {
        axios.post(host+uri, data)
        .then(res=>{
            console.log(res.data)
            if (res.data.isRightUser === true ) {
                console.log("성공")
                setLog(true)
            }else {
                console.log("실패")
                alert('비밀번호를 정확히 입력하세요.') 
    }
        })
    }
    const handleSubmit = (e) => {
        console.log("실행")
        e.preventDefault();
        
            sendMemData(`api/members/check/user`, {mem_id,mem_pw})
            
            
        
    }
    if (!log) {
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
                        <div><input className="mypage-confirm-inputbox-id" type="text" value={mem_id} readOnly/></div>
                        <div>비밀번호</div>
                        <div><input
                                    className="mypage-confirm-inputbox-pw" 
                                    size="lg" 
                                    type="password" 
                                    placeholder="비밀번호를 입력해주세요."
                                    onChange={(e)=>setpw(e.target.value)}
                                    value={mem_pw}
                            />
                        </div>
                        <Link to="../find_pw" className="mypage-confirm-findpw">비밀번호를 잊으셨나요?</Link>
                    </div>
                    <div className="mypage-confirm-submit-container">
                        <input className="mypage-confirm-submit" type="submit" value="확인"/>
                    </div>
                </form>
            </div>
        )
    } else if (log) {
        return (
            <>
                <MyPageModify />
            </>
        )  
    }
    
}

export default withRouter(MyPageConfirmPw)