import React, {useEffect,useState} from 'react'
import './MyPageModify.css'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'
import MyPageModifyUserInfo from './MyPageModifyUserInfo.js'
export default function Modify() {
    const [userInfo, setUserInfo] = useState(null)

    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setUserInfo(res.data)
            })
    }
    useEffect(() => {if (!userInfo) {
        //getAxiosData(`api/`)
        setUserInfo(
            {
                mem_ID : "testid",
                mem_PW : 12345,
                mem_name: "테스트",
                mem_email: "test@test.test",
                mem_tel: "01039350584"
            }
        )}})
    const [id, setId] = useState("abcde")
    const [email, setEmail] = useState("abc@abc.com")

    const sendJoinData = (uri, data) => {
        axios.post(host+uri, data)
        .then(res=>console.log(res.data))
    }
    const handleData = (data)=>{
        console.log(data)
        //sendJoinData('/api/member/', data)
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
    return (
        <>
            {userInfo && <MyPageModifyUserInfo userInfo = {userInfo} onSubmit={handleData} checkingId={checkingId} CheckEmailF={CheckEmailF}/>}
        </>
    )
}
