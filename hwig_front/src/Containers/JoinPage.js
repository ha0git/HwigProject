import React, {useState} from 'react'
import Join from '../RegisterComponents/Join'
import axios from 'axios'
import {host} from './ServerAddress'

export default function JoinPage() {
    const [id, setId] = useState("abcde")
    const [email, setEmail] = useState("abc@abc.com")

    const sendJoinData = (uri, data) => {
        axios.post(host+uri, data)
        .then(res=>console.log(res.data))
    }
    const handleData = (data)=>{
        console.log(data)
        sendJoinData('/api/member', data)
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

    function CheckEmailF(str){                                                 
        const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
        if(!reg_email.test(str)) {                            
             return false;         
        }                            
        else {                       
             return true;         
        }                            
   }                                
   
   

    const checkingEmail = (checkEmail)=>{
    if(checkEmail === email){
        alert('이미 존재하는 이메일입니다.')
        return false
    }else if(checkEmail !== email && CheckEmailF(checkEmail)){
        alert('사용할 수 있는 이메일입니다.')
        return true
    }else if(!checkEmail || !CheckEmailF(checkEmail)){
        alert('정확하게 이메일을 입력해주세요. (abc@abc.com)')
        return false
    }
}

    return (
        <>
            <Join onSubmit={handleData} checkingId={checkingId} checkingEmail={checkingEmail} CheckEmailF={CheckEmailF}/>
        </>
    )
}
