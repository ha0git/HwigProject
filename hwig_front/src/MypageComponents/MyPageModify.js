import React, {useEffect,useState} from 'react'
import './MyPageModify.css'
import axios from 'axios'
import { host } from '../Containers/ServerAddress'
import MyPageModifyUserInfo from './MyPageModifyUserInfo.js'
import {connect} from 'react-redux'

export default function Modify(props) {
    const [userInfo, setUserInfo] = useState(null)
    const getAxiosData = (uri) => {
        axios.get(host + uri)
            .then(res => {
                console.log(res.data)
                setUserInfo(res.data)
            })
    }
    useEffect(() => {if (!userInfo && props.userInfo.mem_id !== undefined) {
        getAxiosData(`api/members/${props.userInfo.mem_id}`)
        
    }})

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
        sendMemData(`api/members/${props.userInfo.mem_id}`, data)
    }
    const checkingId = (checkId)=>{
        if(sendMemData(`api/members/check/id`, checkId)){
            alert('이미 존재하는 아이디입니다.')
            return false
        }else if(!sendMemData(`api/members/check/id`, checkId) && checkId.length >= 6){
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
   const unRegister = () => {
        if (/* eslint no-restricted-globals: ["off"] */confirm("정말 탈퇴하시겠습니까??") == true){    //확인
            sendUnReg(`api/members/${props.userInfo.mem_id}`)
        }else{
            return false;
        }
   } 
   const sendUnReg = (uri) => {
        axios.delete(host + uri)
        .then(res => {
            console.log(res.data)
            if (res.data.code === 200 ) {
                alert("잘가요ㅠㅠ")
                props.history.push('/')
            } else if (res.data.code === 400){
                alert("현재 주문한 상품이 있거나 다른 이유로 탈퇴할 수 없습니다.")
            }
        })
   }                           
    return (
        <>
            {userInfo && <MyPageModifyUserInfo userInfo = {userInfo} onSubmit={handleData} checkingId={checkingId} CheckEmailF={CheckEmailF} checkingEmail={checkingEmail} unRegister={unRegister}/>}
        </>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged,
        userInfo: state.reducer.userInfo
    }
}

Modify = connect(mapStateToProps)(Modify)