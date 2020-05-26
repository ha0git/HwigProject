import React,{useState,useEffect} from 'react'
import '../MypageComponents/MyPageConfirmPw.css'
import {Container, Row, Col, Form, Button, Modal} from 'react-bootstrap'
import axios from 'axios'
import { host } from './ServerAddress'
import MyPageConfirmPw from '../MypageComponents/MyPageConfirmPw'
import {connect} from 'react-redux'


export default function MyPageConf(props) {
    const [userInfo,setUserInfo] = useState(null)
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
    return (
        <>
            {userInfo && <MyPageConfirmPw userInfo = {userInfo}/>}
        </>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        isLogged: state.reducer.isLogged,
        userInfo: state.reducer.userInfo
    }
}

MyPageConf = connect(mapStateToProps)(MyPageConf)
