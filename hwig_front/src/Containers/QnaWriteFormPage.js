import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { host } from './ServerAddress'
import QnaWriteForm from '../CustomerServiceComponents/QnaWriteForm'
import {connect} from 'react-redux'

function QnaWriteFormPage(props) {
    console.log(props.isLogged)
    const [returnOrderNum, setReturnOrderNum] = useState(null)
    const [orderNumCheck, setOrderNumCheck] = useState(null)
    const [orderOK, setOrderOK] = useState(false)
    const [userInfo, setUserInfo] = useState("")
    const [isLogged, setIsLogged] = useState(false)

    const postAxiosData = (uri, data) => {
        console.log("실행")
        axios.post(host + uri, data)
            .then((res) => {
                console.log(res.data)
            })
    }
    useEffect(() => {
        if(isLogged !== props.isLogged){
            setIsLogged(props.isLogged)
        }

        if(!props.isLogged){
            props.history.push("/login")
        }

        if (!returnOrderNum) {
            setReturnOrderNum(1)
        }

        if(!userInfo){
            console.log("실행")
            setUserInfo(props.userInfo)
        }

        if(userInfo != props.userInfo){
            console.log("바뀐거 실행")
            setUserInfo(props.userInfo)
        }
    })

    const handleData = (data) => {
        console.log(data)
        postAxiosData('api/qna/qna_write', data)
    }

    const checkOrderNum = (orderNum) => {
        if (orderNum === returnOrderNum) {
            alert('확인되었습니다.')
        } else {
            alert('없는 주문 번호 입니다.')
        }
    }

    console.log(userInfo)
    return (
        <>
            {userInfo && <QnaWriteForm onSubmit={handleData} orderNumCheck={orderNumCheck} checkOrderNum={checkOrderNum} userInfo={userInfo}/>}
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged,
        userInfo: state.reducer.userInfo
    }
}

QnaWriteFormPage = withRouter(connect(mapStateToProps)(QnaWriteFormPage))

export default QnaWriteFormPage