import React, {useState,useEffect} from 'react'
import Join from '../RegisterComponents/Join'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import {host} from './ServerAddress'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

function JoinPage(props) {
    const [isLogged, setIsLogged] = useState(false)
    useEffect(() => {
        if(isLogged !== props.isLogged){
            console.log(isLogged, props.isLogged)
            setIsLogged(props.isLogged)
        }
    })
    const sendJoinData = (uri, data) => {
        axios.post(host+uri, data)
        .then(res=>{
            console.log(res.data)
            if (res.data.code === 201 ) {
                alert("추카")
                props.history.push('/joincomplete')
            } else if (res.data.duplicated === true){
                alert("ㅈㅂ")
                return true
            } else if (res.data.duplicated === false){
                alert("사용할수 있습니다")
                return false
                
            } 
        })

        
    }
    const handleData = (data)=>{
        console.log(data)
        sendJoinData(`api/members/`, data)
    }
    const checkingId = (data)=>{
        console.log(data)
        sendJoinData(`api/members/check/id`, data)
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
   function CheckIDF(str){                                                 
        const reg_id = /^[0-9a-zA-Z]+$/;
        if(!reg_id.test(str)) {                            
            return false;         
        }                            
        else {                       
            return true;         
        }                            
    }
    function CheckPWF(str){                                                 
        const reg_pw = /(?=.*\d{1,50})(?=.*[~`?!@#$%\^&*()-+=/_₩]{1,50})(?=.*[a-zA-Z]{1,50}).{8,50}$/;
        if(!reg_pw.test(str)) {                            
            return false;         
        }                            
        else {                       
            return true;         
        }                            
    }
    function CheckTLF(str){                                                 
        const reg_tl = /^[0-9]+$/;
        if(!reg_tl.test(str)) {                            
            return false;         
        }                            
        else {                       
            return true;         
        }                            
    }
   

    const checkingEmail = (data)=>{
        console.log(data)
        sendJoinData(`api/members/check/email`, data)
    }

    return (
        <>
           {isLogged ? <Redirect to="/"/> : <Join onSubmit={handleData} checkingId={checkingId} checkingEmail={checkingEmail} CheckEmailF={CheckEmailF} CheckIDF={CheckIDF} CheckPWF={CheckPWF} CheckTLF={CheckTLF}/> }
        </>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged
    }
}

JoinPage = connect(mapStateToProps)(JoinPage)

export default withRouter(JoinPage)
