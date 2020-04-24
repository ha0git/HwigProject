import React, {useEffect,useState} from 'react'
import './MyPageModify.css'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'
import MyPageModifyUserInfo from './MyPageModifyUserInfo.js'
import {withRouter} from 'react-router-dom'
function Modify(props) {
    const [userInfo, setUserInfo] = useState(null)
    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setUserInfo(res.data)
            })
    }
    useEffect(() => {if (!userInfo) {
        getAxiosData(`api/members/momomo`)
        
    }})
    const [id, setId] = useState("abcde")

    const sendMemData = (uri, data) => {
        axios.put(host+uri, data)
        .then(res=>{
            console.log(res.data)
            if (res.data.code === 200 ) {
                alert("추카")
                props.history.push('/mypage')
            } else if (res.data.duplicated === true){
                alert("ㅈㅂ")
                return true
            } else if (res.data.duplicated === false){
                alert("사용할수 있습니다")
                return false
                
            } 
    })}
    const handleData = (data)=>{
        console.log(data)
        sendMemData('/api/members/momomo', data)
    }
    const checkingId = (checkId)=>{
        if(checkId === id){
            alert('이미 존재하는 아이디입니다.')
            return false
        }else if(checkId !== id && checkId.length >= 6){
            alert('사용할 수 있는 아이디입니다.')
            return true
        }else if(!checkId || checkId.length < 6){
            alert('6자 이상의 아이디를 입력해주세요.')
            return false
        }
    }
    const checkingEmail = (data)=>{
        console.log(data)
        sendMemData(`api/members/check/email`, data)
    }

    function CheckEmailF(str){                                                 
        const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if(!reg_email.test(str)) {                            
             return false;         
        }                            
        else {                       
             return true;         
        }                            
   }                                
    return (
        <>
            {userInfo && <MyPageModifyUserInfo userInfo = {userInfo} onSubmit={handleData} checkingId={checkingId} CheckEmailF={CheckEmailF} checkingEmail={checkingEmail} />}
        </>
    )
}
export default withRouter(Modify)