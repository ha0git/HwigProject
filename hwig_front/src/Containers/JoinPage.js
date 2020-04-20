import React, {useState,useEffect} from 'react'
import Join from '../RegisterComponents/Join'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {host} from './ServerAddress'
import {connect} from 'react-redux'

function JoinPage(props) {
    const [isLogged, setIsLogged] = useState(false)
    useEffect(() => {
        if(isLogged !== props.isLogged){
            console.log(isLogged, props.isLogged)
            setIsLogged(props.isLogged)
        }
    })
    const [id, setId] = useState("abcde")
    const [email, setEmail] = useState("abc@abc.com")

    const sendJoinData = (uri, data) => {
        axios.post(host+uri, data)
        .then(res=>console.log(res.data))
    }
    const handleData = (data)=>{
        console.log(data)
        sendJoinData('/api/member/', data)
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
           {isLogged ? <Redirect to="/"/> : <Join onSubmit={handleData} checkingId={checkingId} checkingEmail={checkingEmail} CheckEmailF={CheckEmailF}/> }
        </>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged
    }
}

JoinPage = connect(mapStateToProps)(JoinPage)

export default JoinPage